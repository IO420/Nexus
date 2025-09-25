"use client";

import { useEffect } from "react";

interface ClearParamsProps {
  paramsToClear: string[];
}

export default function ClearParams({ paramsToClear }: ClearParamsProps) {
  useEffect(() => {
    const url = new URL(window.location.href);
    let changed = false;

    paramsToClear.forEach((param) => {
      if (url.searchParams.has(param)) {
        url.searchParams.delete(param);
        changed = true;
      }
    });

    if (changed) {
      window.history.replaceState({}, "", url.toString());
    }
  }, [paramsToClear]);

  return null;
}
