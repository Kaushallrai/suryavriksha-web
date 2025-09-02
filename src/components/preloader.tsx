"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide preloader after page is hydrated (or after a short delay)
    const timeout = setTimeout(() => setShow(false), 1000); // 1s delay for demo
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors">
      <div className="flex flex-col items-center gap-4">
        <div className="flex space-x-2">
          <span className="block h-4 w-4 rounded-full bg-zinc-800 dark:bg-zinc-100 animate-bounce [animation-delay:-0.32s]"></span>
          <span className="block h-4 w-4 rounded-full bg-zinc-800 dark:bg-zinc-100 animate-bounce [animation-delay:-0.16s]"></span>
          <span className="block h-4 w-4 rounded-full bg-zinc-800 dark:bg-zinc-100 animate-bounce"></span>
        </div>
        <span className="text-zinc-700 dark:text-zinc-200 text-sm font-medium mt-2">
          Loading...
        </span>
      </div>
    </div>
  );
}
