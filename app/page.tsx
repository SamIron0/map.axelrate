import Image from "next/image";
import L from 'leaflet';

import * as nigeriaBorder from "../nigeriaBorder.json";
export default function Home() {
  let map = L.map("map").setView([9.082, 8.6753], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);
  var border = L.geoJson(nigeriaBorder).addTo(map);
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
        <small>
          <a href="https://www.openstreetmap.org/#map=6/9.936/8.196">
            View Larger Map
          </a>
        </small>
      </div>
    </main>
  );
}
