"use client"
import { useEffect, useRef } from 'react';
import nigeriaBorder from "../nigeriaBorder.json"

export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      let L = require('leaflet');
      var map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      var border = L.geoJson(nigeriaBorder as GeoJSON.FeatureCollection).addTo(map);
      map.fitBounds(border.getBounds());
    }
  }, []);

  return (
    <>
      <div id="map"></div>
      <div>hello</div>
      {/* Rest of your code */}
    </>
  );
}