"use client"
import React, { useEffect, useRef, useState } from 'react';
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
  const handleCameraButtonClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };
  return (
    <div id="root">
      <div
        className='w-9.5/10 justify-center mt-6'>
        <div
          className='w-full rounded-md'>
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
          <button
            onClick={handleCameraButtonClick}
            className="text-black bg-white mt-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            POST
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>


      </div>

    </div>
  );
};

export default HomePage;