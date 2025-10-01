"use client";

import { ReactNode, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface FormHandlerProps {
  children: ReactNode;
  onSubmit: () => Promise<void>;
}

export default function FormHandler({ children, onSubmit }: FormHandlerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null) params.delete(key);
        else params.set(key, value);
      });

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit();
    } catch (err: any) {
      updateParams({ error: String(err) });
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
