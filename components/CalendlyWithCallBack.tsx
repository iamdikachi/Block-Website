"use client";
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

interface Props {
  url: string;
  onBookingComplete?: (eventData: any) => void;
}

export default function CalendlyWithCallback({ url, onBookingComplete }: Props) {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;

      const { event, payload } = e.data;

      if (event === "calendly.event_scheduled") {
        // payload contains: event.uri, invitee.uri
        onBookingComplete?.(payload);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onBookingComplete]);

  return <InlineWidget url={url} styles={{ height: "700px" }} />;
}