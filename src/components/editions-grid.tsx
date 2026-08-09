"use client";

import { useState } from "react";
import type { Edition } from "@/content/editions";
import { EditionCard } from "@/components/edition-card";

const PAGE_SIZE = 6;

export function EditionsGrid({ editions }: { editions: Edition[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {editions.slice(0, visible).map((edition, i) => (
          <EditionCard key={edition.label} edition={edition} isLatest={i === 0} />
        ))}
      </div>

      {visible < editions.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-pulse hover:text-pulse"
          >
            Load more editions
          </button>
        </div>
      )}
    </>
  );
}
