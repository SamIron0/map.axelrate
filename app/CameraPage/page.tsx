import React, { useRef } from 'react';
import { Video, CaptureButton } from './styles';



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


const App: React.FC = () => {
    return (
      
        <div className="video-container">
            <Video/>
            <CaptureButton />
        </div>
    );
};

export default App;
