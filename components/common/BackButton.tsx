"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 inline-flex items-center gap-2 text-xs md:text-sm 
                 text-slate-400 hover:text-slate-100 transition 
                 underline underline-offset-4"
    >
      ← Вернуться назад
    </button>
  );
}
