import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  const logs: string[] = [];
  const addLog = (msg: string) => {
    console.log(msg);
    logs.push(msg);
  };

  try {
    const secret = process.env.NOTION_SECRET?.trim();
    const dbId = process.env.NOTION_DATABASE_ID?.trim();

    if (!secret || !dbId) {
      addLog("ERROR: NOTION_SECRET or NOTION_DATABASE_ID is missing.");
      return NextResponse.json({ error: "Configuration missing", logs }, { status: 500 });
    }

    addLog(`DEBUG: Secret starts with ${secret.substring(0, 5)}...`);
    addLog(`DEBUG: Database ID: ${dbId} (Length: ${dbId.length})`);

    const notion = new Client({ auth: secret });

 
    const dbInfo: any = await notion.databases.retrieve({ database_id: dbId });
    const dataSourceId = dbInfo.data_sources?.[0]?.id || dbId;


    let response: any;
    try {
      if ((notion as any).dataSources?.query) {
        response = await (notion as any).dataSources.query({
          data_source_id: dataSourceId,
          sorts: [{ timestamp: "created_time", direction: "descending" }],
        });
      } else {
        response = await notion.request({
          path: `databases/${dbId}/query`,
          method: "post",
          body: {
            sorts: [{ timestamp: "created_time", direction: "descending" }],
          },
        });
      }
    } catch (queryError: any) {
     
      response = await notion.search({
        filter: { value: "data_source", property: "object" }
      });
    
      response.results = response.results.filter((res: any) => 
        res.id.replace(/-/g, '') === dbId.replace(/-/g, '') ||
        res.id.replace(/-/g, '') === dataSourceId.replace(/-/g, '')
      );
    }

    const pages = (response?.results || []).map((page: any) => ({
      id: page.id,
      title: page.properties?.Name?.title?.[0]?.plain_text ?? 
             page.properties?.title?.title?.[0]?.plain_text ?? 
             "Untitled",
      status: page.properties?.Status?.select?.name ?? null,
      date: page.properties?.Date?.date?.start ?? page.created_time,
      url: page.url,
    }));

    return NextResponse.json({ pages });
  } catch (error: any) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}
