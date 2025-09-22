"use client";

import { useAuth } from "../lib/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/");
    }
  }, [loading, authenticated, router]);

  if (loading) return <p>Cargando...</p>;

  return authenticated ? <>{children}</> : null;
};
//IO
