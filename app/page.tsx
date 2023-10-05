"use client"
import Image from "next/image";
import L, { GeoJSON } from 'leaflet';
import { useEffect } from 'react';
import * as nigeriaBorder from "../nigeriaBorder.json";
export default function Home() {

  let map = L.map("map").setView([9.082, 8.6753], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);
  var border = L.geoJson(nigeriaBorder as GeoJSON.FeatureCollection).addTo(map);
  map.fitBounds(border.getBounds());


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">
          MY MOTHERLAND, A FAILED STATE
        </h1>
        <p className="text-lg mb-6">
          I planned to start this paper by giving you a brief picture of how we
          got to this mess reserching
        </p>

        <br />

      </div>
    </main>
  );

}
