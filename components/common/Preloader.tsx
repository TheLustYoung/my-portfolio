// components/common/Preloader.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PreloaderProps = {
  children: ReactNode;
};

export function Preloader({ children }: PreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // чуть задержим, чтобы не мигал
      setTimeout(() => setIsLoaded(true), 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {/* Оверлей прелоадера */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#05060a] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Неоновое «ядро» */}
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 blur-xl opacity-60" />
                <motion.div
                  className="relative h-16 w-16 rounded-full border border-cyan-400/60 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                LOADING
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Контент сайта, скрыт пока !isLoaded */}
      <div className={isLoaded ? "opacity-100" : "opacity-0"}>
        {children}
      </div>
    </>
  );
}
