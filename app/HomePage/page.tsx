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
        zoom={0}
        height="600px"
        markers={mapMarkers}
      />


    </Container>
  );
};

export default HomePage;