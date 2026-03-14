import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { pageId } = await request.json();

    const secret = process.env.NOTION_SECRET?.trim();

    if (!secret) {
      return NextResponse.json({ error: "Configuration missing" }, { status: 500 });
    }

    if (!pageId) {
      return NextResponse.json({ error: "Page ID is required" }, { status: 400 });
    }

    const notion = new Client({ auth: secret });

    await notion.pages.update({
      page_id: pageId,
      archived: true,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DEBUG NOTION DELETE ERROR:", error);
    return NextResponse.json(
      { 
        error: error.message, 
        details: error.body || "No additional details" 
      }, 
      { status: error.status || 500 }
    );
  }
}
