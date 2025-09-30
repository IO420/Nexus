"use client";

import { useEffect, useState } from "react";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";
import { useSearchParams } from "next/navigation";

export default function GlobalAlert() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState<string | null>(null);
  const [showError, setShowError] = useState<string | null>(null);

  useEffect(() => {
    const success = searchParams.get("success");
    const error = searchParams.get("error");

    if (success) setShowSuccess(success);
    if (error) setShowError(error);
  }, []);

  return (
    <section className="containerAlerts">
      {showError && (
        <>
          <AlertBox key={Date.now()} message={showError} type="error" />
        </>
      )}

      {showSuccess && (
        <>
          <AlertBox key={Date.now()} message={showSuccess} type="success" />
        </>
      )}
    </section>
  );
}
