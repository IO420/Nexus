"use client";

import { Toaster } from "react-hot-toast";
import React from "react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            fontSize: "16px",
          },

          error: {
            duration: 6000,
            style: {
              fontSize: "1.5rem",
              backgroundColor: "#fee2e2dd",
              color: "#000000ff",
              fontWeight: "600",
              padding:"1.5rem"
            },
          },

          success: {
            duration: 6000,
            style: {
              fontSize: "1.5rem",
              backgroundColor: "#d1fae5dd",
              color: "#000000ff",
              fontWeight: "600",
              padding:"1.5rem"
            },
          },
        }}
        position="top-left"
        reverseOrder={false}
      />
    </>
  );
}
