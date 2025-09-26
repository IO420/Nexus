"use client";

import { useState, ReactNode } from "react";

interface ToggleOption {
  key: string;
  label: string;
  content: ReactNode;
}

interface ToggleProps {
  options: ToggleOption[];
  defaultView?: string;
}

export default function Toggle({ options, defaultView }: ToggleProps) {
  const [view, setView] = useState(defaultView || options[0].key);

  return (
    <section className="toggleSection">
      <div className="toggleGroup">
        {options.map((opt) => (
          <button
            key={opt.key}
            className={`toggleButton ${view === opt.key ? "active" : ""}`}
            onClick={() => setView(opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="padding">
        {options.find((opt) => opt.key === view)?.content}
      </div>
    </section>
  );
}
