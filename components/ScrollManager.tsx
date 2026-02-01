"use client";

import { useEffect } from "react";

export function ScrollManager() {
  useEffect(() => {
    // Force scroll to top on manual reload
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    // Optional: Clear hash without refreshing
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null;
}
