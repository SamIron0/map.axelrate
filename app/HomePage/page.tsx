"use client"
import React, { useEffect, useState } from 'react';

import Map from '../../components/Map';

import { Container } from './styles';

const HomePage: React.FC = () => {
  const [mapMarkers, setMapMarkers] = useState<Array<MarkerType> | undefined>(undefined);

  const [height, setHeight] = useState('700px');
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerWidth < 650 ? '660px' : '900px');
      setZoom(window.innerWidth < 650 ? 0 : 0);
    }
  }, []);

  return (
    <Container>

      <Map
        mapId="MapTest"
        lat={9.0820}
        lng={8.6753}
        zoom={zoom}
        height={height}
        markers={mapMarkers}
      />
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Post
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>


    </Container>
  );
};

export default HomePage;