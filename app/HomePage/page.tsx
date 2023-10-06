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
        lat={-22.84408190473907}
        lng={-46.937304740830086}
        zoom={9}
        height="600px"
        markers={mapMarkers}
      />
     

    </Container>
  );
};

export default HomePage;