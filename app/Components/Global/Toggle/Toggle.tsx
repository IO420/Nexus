"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [view, setView] = useState(defaultView || options[0].key);

  const handleClick = (key: string) => {
    setView(key);

    const params = new URLSearchParams(searchParams.toString());
    params.set("key", key);

    router.replace(`${pathname}?${params.toString()}`);
  };
  
  return (
    <section className="toggleSection">
      <div className="toggleGroup">
        {options.map((opt) => (
          <button
            key={opt.key}
            className={`toggleButton ${view === opt.key ? "active" : ""}`}
            onClick={() => handleClick(opt.key)}
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
//IO