"use client"

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../../components/MapView"), { ssr: false });

export default function HomePage() {
  return (
    <main className="h-screen w-screen">
      <MapView />
    </main>
  );
}
