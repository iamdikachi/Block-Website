"use client";

import { useEffect, useState } from "react";
import { getNotionPages } from "@/lib/notion";
import { motion, AnimatePresence } from "framer-motion";

export default function NotionList() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNotionPages()
      .then((data) => {
        if (Array.isArray(data)) {
          setPages(data);
        } else {
          setError("Unexpected data format received.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to sync with Notion.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-500 text-sm animate-pulse">
          Syncing with Notion...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 border border-red-500/20 bg-red-500/5 rounded-xl text-center">
        <p className="text-red-400 text-sm">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-xs text-zinc-400 hover:text-white underline underline-offset-4"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {pages.length > 0 ? (
          pages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-brand-dark/40 border border-white/5 rounded-xl hover:border-brand-blue/30 transition-all group"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-zinc-100 group-hover:text-brand-blue transition-colors">
                    {page.title}
                  </p>
                  {page.date && (
                    <p className="text-xs text-zinc-500">
                      Added {new Date(page.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
                {page.status && (
                  <span className="text-[10px] uppercase tracking-wider font-black px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                    {page.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 border border-dashed border-white/10 rounded-2xl"
          >
            <p className="text-zinc-500 text-sm">
              No active onboarding hubs found.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
