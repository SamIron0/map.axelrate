"use client"
import { useEffect, useRef } from 'react';
import nigeriaBorder from "../nigeriaBorder.json"
import * as L from 'leaflet'

export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined") {
     // let L = require('leaflet');
      let map = L.map('map').setView([9.082, 8.6753], 6);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      //var border = L.geoJson(nigeriaBorder as GeoJSON.FeatureCollection).addTo(map);
      //map.fitBounds(border.getBounds());
    }
  }, []);

  return (
    <main className="height:500px">
      <div id="map"></div>
      {/* Rest of your code */}
    </main>
  );
}