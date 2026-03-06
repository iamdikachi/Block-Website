"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CalendlyWithCallback from "@/components/CalendlyWithCallBack";
import { createNotionBooking } from "@/lib/notion";
import { motion } from "framer-motion";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SuccessModal } from "@/components/SuccessModal";

export default function BookPage() {
  const router = useRouter();
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
  }>({
    isOpen: false,
    title: "",
    message: "",
  });

  async function handleBooking(payload: any) {
    try {
      await createNotionBooking({
        eventUri: payload.event.uri,
        inviteeUri: payload.invitee.uri,
        bookedAt: new Date().toISOString(),
      });
      setModalConfig({
        isOpen: true,
        title: "Booking Confirmed!",
        message:
          "Your call has been scheduled and your personal onboarding hub is being prepared in Notion. See you soon!",
      });
    } catch (error: any) {
      console.error(error);
      setModalConfig({
        isOpen: true,
        title: "Booking Partial Success",
        message:
          "Your call is scheduled on Calendly, but we hit a snag syncing with Notion. Don't worry, our team will set it up manually!",
      });
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue/30 overflow-x-hidden relative">
      <Navbar />

      <main className="relative pt-32 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black">
              Book Your Activation Call
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Ready to see the Bloc infrastructure in action? Select a time
              below to chat with our team.
            </p>
          </div>

          <div className="bg-brand-dark/50 border border-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm shadow-2xl relative">
            <CalendlyWithCallback
              url={
                process.env.NEXT_PUBLIC_CALENDLY_URL ||
                "https://calendly.com/emmanuelnnadi097/meeting-mr-presisdent-federal-republic-of-nigeria"
              }
              onBookingComplete={handleBooking}
            />
          </div>

          <div className="pt-12 border-t border-white/5">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="font-bold text-brand-blue">
                  What happens after I book?
                </h3>
                <p className="text-zinc-400 text-sm">
                  You'll receive a calendar invite with a Zoom link. We'll also
                  set up your temporary Onboarding Hub in Notion.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-brand-blue">
                  Who should attend?
                </h3>
                <p className="text-zinc-400 text-sm">
                  Ideally, someone from your Product or Customer Success
                  leadership team who owns the activation metrics.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />

      <SuccessModal
        isOpen={modalConfig.isOpen}
        onClose={() => {
          setModalConfig((prev) => ({ ...prev, isOpen: false }));
          if (modalConfig.title === "Booking Confirmed!") {
            router.push("/");
          }
        }}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </div>
  );
}
