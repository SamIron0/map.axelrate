"use client"
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import Map from '../../components/Map';

import { Container } from './styles';
interface VideoProps {
  videoStyles: React.CSSProperties;
}
const HomePage: React.FC<VideoProps> = ({ videoStyles }) => {
  const [mapMarkers, setMapMarkers] = useState<Array<MarkerType> | undefined>(undefined);

  const [height, setHeight] = useState('700px');
  const [zoom, setZoom] = useState(5);
  const [region, setRegion] = useState("");
  const [locationFetched, setLocationFetched] = useState(false); // New state variable
  const [modalIsOpen, setIsOpen] = useState(false);


  Modal.setAppElement('#root');

  const videoStream = useRef<HTMLVideoElement>(null);

  const startCapture = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoStream.current) {
          videoStream.current.srcObject = stream;
          videoStream.current.play();
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    }
  }

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

  //console.log(region);

  return (
    <div id="root">


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '70%',
            height: '70%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <video controls>
          <source src="YOUR_VIDEO_SOURCE" type="video/mp4" />
        </video>
      </Modal>
      <Container>

        <Map
          mapId="MapTest"
          lat={9.0820}
          lng={8.6753}
          zoom={zoom}
          height={height}
          markers={mapMarkers}
        />
        <button onClick={openModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Post
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>


      </Container>
      <div>
        <video ref={videoStream} style={videoStyles} muted />
        <button onClick={startCapture}>Start Capture</button>
      </div>
    </div>
  );
};

export default HomePage;