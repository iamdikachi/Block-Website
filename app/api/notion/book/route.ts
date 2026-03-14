import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { eventUri, inviteeUri, bookedAt, name } = data;

    const secret = process.env.NOTION_SECRET?.trim();
    const dbId = process.env.NOTION_DATABASE_ID?.trim();

    if (!secret || !dbId) {
      console.error("ENVIRONMENT ERROR: Missing secret or database ID in booking route");
      return NextResponse.json({ error: "Configuration missing" }, { status: 500 });
    }

    const notion = new Client({ auth: secret });

    await notion.request({
      path: "pages",
      method: "post",
      body: {
        parent: { database_id: dbId },
        properties: {
          Name: {
            title: [{ text: { content: name || `Booking — ${bookedAt}` } }],
          },
          "Event URL": {
            email: eventUri, 
          },
          "Invite URL": {
            url: inviteeUri, 
          },
          Status: {
            select: { name: "Confirmed" },
          },
          "Booked At": {
            date: { start: bookedAt },
          },
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DEBUG NOTION BOOKING ERROR:", {
      message: error.message,
      code: error.code,
      status: error.status,
      body: error.body,
    });
    return NextResponse.json(
      { 
        error: error.message, 
        details: error.body || "No additional details" 
      }, 
      { status: error.status || 500 }
    );
  }
}
