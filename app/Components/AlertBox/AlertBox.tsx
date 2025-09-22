'use client'

import { useEffect, useState } from "react";
import "./AlertBox.css";

interface AlertBoxProps {
  message: string | null;
  type: "error" | "success";
  duration?: number;
}

export default function AlertBox({ message, type, duration = 6000 }: AlertBoxProps) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (message) {
      setText(message);
      setVisible(true);

      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setText(""), 500);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [message, duration]);

  if (!text) return null;

  return (
    <div className={`messageBox ${type} ${!visible ? "hidden" : ""}`}>
      {text}
    </div>
  );
}
