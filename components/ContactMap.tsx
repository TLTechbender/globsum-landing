"use client";

import { useEffect, useState } from "react";

const fixMarkerIcon = () => {
  if (typeof window === "undefined") return;
  
  const L = require("leaflet");
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
};

export default function ContactMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [Leaflet, setLeaflet] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    fixMarkerIcon();
    
    import("react-leaflet").then((mod) => {
      setLeaflet(mod);
    });
  }, []);

  if (!isMounted || !Leaflet) {
    return (
      <div className="h-[400px] w-full rounded-2xl overflow-hidden bg-gray-200 animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Loading map...</span>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, useMap } = Leaflet;
  const position: [number, number] = [7.4538, 3.9320];

  function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    map.setView(center, 15);
    return null;
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-3">
          Want to Visit Our Office?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          We&apos;d love to have you! Stop by and let&apos;s discuss your next big project over a cup of coffee.
        </p>
      </div>

      {/* Map Card */}
      <div className="relative group">
        <div className="absolute -inset-2 bg-accent/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <ChangeView center={position} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-center p-1">
                  <strong className="text-accent text-sm">Global Summit Technologies</strong><br />
                  <span className="text-xs">No 28, Oba Olagbegi, Oshuntokun,<br />Bodija, Ibadan, Oyo State.</span>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Address Card */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F3525A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-sm font-medium text-gray-700">No 28, Oba Olagbegi, Bodija</span>
        </div>
        <a 
          href="https://maps.google.com/?q=7.4538,3.9320" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
}
