"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import CalendlyWithCallback from "@/components/CalendlyWithCallBack";
import { createNotionBooking } from "@/lib/notion";
import { motion } from "framer-motion";

export default function BookPage() {
  async function handleBooking(payload: any) {
    try {
      await createNotionBooking({
        eventUri: payload.event.uri,
        inviteeUri: payload.invitee.uri,
        bookedAt: new Date().toISOString(),
      });
      alert("Success! Your booking has been recorded in our Notion hub.");
    } catch (error: any) {
      console.error(error);
      alert(
        "Booking recorded on Calendly, but failed to sync to Notion. We'll handle it manually!",
      );
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

          <div className="bg-brand-dark/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">
            <CalendlyWithCallback
              url="https://calendly.com/your-username/30min"
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
    </div>
  );
}
