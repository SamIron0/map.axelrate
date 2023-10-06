"use client"
import React, { useState } from 'react';

import Map from '../../components/Map';

import { Container } from './styles';

const HomePage: React.FC = () => {
  const [mapMarkers, setMapMarkers] = useState<Array<MarkerType> | undefined>(undefined);

  return (
    <Container>

      <Map
        mapId="MapTest"
        lat={9.0820}
        lng={8.6753}
        zoom={5}
        height={screen.width === 640 ? "660px" : "700px"}
        markers={mapMarkers}
      />

      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-2">News</button>


    </Container>
  );
};

export default HomePage;