// lib/notion.ts
// This file is now a client-safe wrapper that calls our internal API routes.
// We no longer import @notionhq/client here to keep the bundle small and secure.

/**
 * Fetches pages from the internal API route.
 * Safe to call from Client Components.
 */
export async function getNotionPages() {
  const response = await fetch("/api/notion/pages");
  if (!response.ok) {
    throw new Error("Failed to fetch pages from Notion");
  }
  return response.json();
}

/**
 * Sends booking data to the internal API route.
 * Safe to call from Client Components.
 */
export async function createNotionBooking(data: {
  eventUri: string;
  inviteeUri: string;
  bookedAt: string;
}) {
  const response = await fetch("/api/notion/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create booking in Notion");
  }
  
  return response.json();
}
