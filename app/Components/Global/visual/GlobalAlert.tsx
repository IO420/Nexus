"use client";

import { useEffect, useState } from "react";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";

export default function GlobalAlert() {
  const [showSuccess, setShowSuccess] = useState<string | null>(null);
  const [showError, setShowError] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const success = url.searchParams.get("success");
    const error = url.searchParams.get("error");

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
