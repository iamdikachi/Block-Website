import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { eventUri, inviteeUri, bookedAt } = data;

    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    });

    // We use the generic request method since the SDK version v5 for this environment 
    // has missing namespaces for some endpoints in the high-level API.
    await notion.request({
      path: "pages",
      method: "post",
      body: {
        parent: { database_id: process.env.NOTION_DATABASE_ID! },
        properties: {
          Name: {
            title: [{ text: { content: `Booking — ${bookedAt}` } }],
          },
          "Event URI": {
            url: eventUri,
          },
          "Invitee URI": {
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
    console.error("Booking Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
