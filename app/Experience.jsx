"use client";

import { useEffect, useRef } from "react";
import { mountExperience } from "../lib/experience.mjs";
export default function Experience({ children }) {
  const root = useRef(null);
  useEffect(() => {
    if (!root.current) return;
    return mountExperience(root.current);
  }, []);
  return (
    <div id="travellers-app" ref={root}>
      {children}
    </div>
  );
}
