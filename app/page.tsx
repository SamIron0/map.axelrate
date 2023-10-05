"use client"
import { useEffect, useRef } from 'react';
import nigeriaBorder from "../nigeriaBorder.json"
export default function Home() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let L = require('leaflet');
      let map = L.map(mapRef.current).setView([9.082, 8.6753], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);
      var border = L.geoJson(nigeriaBorder as GeoJSON.FeatureCollection).addTo(map);
      map.fitBounds(border.getBounds());
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
      {/* Rest of your code */}
    </main>
  );
}