// lib/notion.ts

export async function getNotionPages() {
  try {
    const response = await fetch("/api/notion/pages");
    const data = await response.json().catch(() => ({}));
    
    if (data.logs) {
      console.group("Notion Backend Diagnostic Logs");
      data.logs.forEach((log: string) => console.log(log));
      console.groupEnd();
    }

    if (!response.ok) {
      console.error("Notion Fetch API Error Details:", data);
      const errMsg = data.error || data.message || "Failed to fetch pages from Notion";
      const logSummary = data.logs ? " | Logs: " + data.logs.join(" -> ") : "";
      throw new Error(errMsg + logSummary);
    }
    return data.pages;
  } catch (err: any) {
    console.error("Notion SDK Wrapper Error:", err);
    throw err;
  }
}

export async function createNotionBooking(data: {
  eventUri: string;
  inviteeUri: string;
  bookedAt: string;
  name?: string;
}) {
  const response = await fetch("/api/notion/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  const result = await response.json().catch(() => ({}));
  
  if (!response.ok) {
    throw new Error(result.error || "Failed to create booking in Notion");
  }
  
  return result;
}

export async function deleteNotionBooking(pageId: string) {
  const response = await fetch("/api/notion/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId }),
  });
  
  const result = await response.json().catch(() => ({}));
  
  if (!response.ok) {
    throw new Error(result.error || "Failed to delete booking in Notion");
  }
  
  return result;
}
