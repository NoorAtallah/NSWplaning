"use client";

import { useState } from "react";
import {
  ConceptCinematic,
  ConceptCollage,
  ConceptSplit,
  ConceptMosaic,
} from "./concepts";

const concepts = [
  { id: 1, name: "Cinematic", note: "Full-bleed photo, dark wash, oversized type" },
  { id: 2, name: "Collage", note: "Warm ground, scattered photos, centred type" },
  { id: 3, name: "Split field", note: "Solid colour block against a photograph" },
  { id: 4, name: "Mosaic", note: "Whole screen as a grid of tiles" },
];

export default function PreviewPage() {
  const [active, setActive] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      {/* SWITCHER */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 bg-white/90 backdrop-blur-xl rounded-full shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 p-1.5">
        {concepts.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            title={c.note}
            className={`text-[12px] font-bold px-5 py-2.5 rounded-full transition-colors ${
              active === c.id
                ? "bg-brand text-white"
                : "text-brand/60 hover:text-brand"
            }`}
          >
            {c.id}. {c.name}
          </button>
        ))}
      </div>

      {active === 1 && <ConceptCinematic />}
      {active === 2 && <ConceptCollage />}
      {active === 3 && <ConceptSplit />}
      {active === 4 && <ConceptMosaic />}

      <div className="max-w-[900px] mx-auto px-8 py-16 text-center">
        <p className="text-[13px] font-medium text-brand/45 leading-[1.9]">
          {concepts.find((c) => c.id === active)?.note}. Tell me which number to
          build out — or which parts of which.
        </p>
      </div>
    </div>
  );
}
