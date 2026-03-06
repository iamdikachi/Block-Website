import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    });

    // We use the generic request method since the SDK version v5 for this environment 
    // has missing namespaces for some endpoints in the high-level API.
    // Querying database: POST /v1/databases/{id}/query
    const response: any = await notion.request({
      path: `databases/${process.env.NOTION_DATABASE_ID}/query`,
      method: "post",
      body: {
        sorts: [{ timestamp: "created_time", direction: "descending" }],
      },
    });

    const pages = response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name?.title?.[0]?.plain_text ?? "Untitled",
      status: page.properties.Status?.select?.name ?? null,
      date: page.properties.Date?.date?.start ?? null,
      url: page.url,
    }));

    return NextResponse.json(pages);
  } catch (error: any) {
    console.error("Fetch Pages Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
