"use client"
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import Map from '../../components/Map';
import Link from 'next/link';
import { Container } from './styles';
interface VideoProps {
  videoStyles: React.CSSProperties;
}
const HomePage: React.FC = () => {
  const [mapMarkers, setMapMarkers] = useState<Array<MarkerType> | undefined>(undefined);

  const [height, setHeight] = useState('700px');
  const [zoom, setZoom] = useState(5);
  const [region, setRegion] = useState("");
  const [locationFetched, setLocationFetched] = useState(false); // New state variable
  const [modalIsOpen, setIsOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  Modal.setAppElement('#root');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerWidth < 650 ? '660px' : '900px');
      setZoom(window.innerWidth < 650 ? 0 : 0);
    }
  }, []);


  const fetchLocation = async () => {
    try {
      const res = await fetch('/api/getLocation');
      if (res.status === 200) { // valid response
        const data = await res.json();
        setRegion(data.location.region_name);
        // console.log(data.location.region_name);
        setLocationFetched(true); // Mark location as fetched
      } else {
        console.error("An error occurred while fetching the location");
      }
    } catch (error) {
      console.error("An error occurred while fetching the location:", error);
    }
  };


  useEffect(() => {
    if (!locationFetched) {
      // Fetch location only if it hasn't been fetched yet
      fetchLocation();
    } else {
      // Fetch data only when location has been fetched

    }
  }, [locationFetched]);



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleCapture = (target: EventTarget & HTMLInputElement) => {
    const file = target.files?.item(0);
    // Do something with the file.
  }
  return (
    <div id="root">
      <div
        className='justify-center mt-6'>
        <div
          className=''>
          <Map
            mapId="MapTest"
            lat={9.0820}
            lng={8.6753}
            zoom={zoom}
            height={height}
            markers={mapMarkers}
          />
        </div>
        <div
          className="w-full flex justify-center"
        >
          return (
          <input
            type="file"
            accept="image/*"
            capture="user"
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleCapture(event.target)}
          />
          );

        </div>


      </div>

    </div>
  );
};

export default HomePage;