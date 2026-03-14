"use client";

import { useEffect, useState } from "react";
import { getNotionPages, deleteNotionBooking } from "@/lib/notion";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function NotionList() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchPages = () => {
    setLoading(true);
    getNotionPages()
      .then((data) => {
        if (Array.isArray(data)) {
      
          const sorted = [...data].sort((a, b) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setPages(sorted);
        } else {
          setError("Unexpected data format received.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to sync with Notion.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this booking?")) return;

    setDeletingId(id);
    try {
      await deleteNotionBooking(id);
      setPages(pages.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete booking.");
    } finally {
      setDeletingId(null);
    }
  };

  const displayedPages = showAll ? pages : pages.slice(0, 5);

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
          <>
            {displayedPages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 bg-brand-dark/40 border border-white/5 rounded-xl hover:border-brand-blue/30 transition-all group relative ${deletingId === page.id ? 'opacity-50 grayscale' : ''}`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <p className="font-bold text-zinc-100 group-hover:text-brand-blue transition-colors">
                      {page.title}
                    </p>
                    {page.date && (
                      <p className="text-xs text-zinc-500">
                        {new Date(page.date).toLocaleDateString()} at {new Date(page.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {page.status && (
                      <span className="text-[10px] uppercase tracking-wider font-black px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                        {page.status}
                      </span>
                    )}
                    <button
                      onClick={(e) => handleDelete(e, page.id)}
                      disabled={deletingId === page.id}
                      className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                      title="Delete booking"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {pages.length > 5 && (
              <motion.button
                layout
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    View All {pages.length} Bookings <ChevronDown size={16} />
                  </>
                )}
              </motion.button>
            )}
          </>
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
