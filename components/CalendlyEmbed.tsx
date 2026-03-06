"use client"; 
import { InlineWidget } from "react-calendly";

interface Props {
  url: string;          
  name?: string;        
  email?: string;       
}

export default function CalendlyEmbed({ url, name, email }: Props) {
  return (
    <InlineWidget
      url={url}
      prefill={{ name, email }}
      styles={{ height: "700px", minWidth: "320px" }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "0069ff",
        textColor: "1a1a1a",
      }}
    />
  );
}