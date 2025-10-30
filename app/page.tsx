"use client";

import { getFirebaseAnalytics } from "@/lib/firebase";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const analytics = getFirebaseAnalytics();
    if (analytics) {
      // Analytics est maintenant disponible
      console.log("Analytics initialisé");
    }
  }, []);

  return <div>MeetProducer</div>;
}