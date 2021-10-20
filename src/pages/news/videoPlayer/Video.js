import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { Button } from '@chakra-ui/button';
import { Box } from "@chakra-ui/react"

const Video = () => {

    const videos =[
     "https://www.youtube.com/watch?v=DeTimoK9qrg",
     "https://www.youtube.com/watch?v=Zp8aZmqf_rU",
     "https://www.youtube.com/watch?v=4YnSk1gI_Oo"
    ]
    const [isPlaying, setIsPlaying] = useState(false)
     
    const [configVideo, setConfigVideo] = useState({
     url: "https://www.youtube.com/watch?v=DeTimoK9qrg",
     controls: false,
     volume: 0.8,
     muted: false,
    });

    const handlePlay = () => {
       setIsPlaying(!isPlaying);
    };
    const handleStop = () => {
       setConfigVideo({url:null});
       setIsPlaying(false);
    };
    const handleMuted = () => {
     setConfigVideo({...configVideo,  muted: !configVideo.muted })
     console.log(configVideo.muted);
   }


    const {url, controls, volume, muted} = configVideo;
 return (
  <div>
            <Box m={5}>
            <h1>Ultimos Eventos</h1>
                <ReactPlayer 
                 url={url} 
                 controls={controls} 
                 playing={isPlaying} 
                 muted={muted}
                 volume={volume}
                  />
                <div className="controllers">
                    <Button colorScheme={"green"} onClick={handlePlay}>
                    {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button colorScheme={"red"} onClick={handleStop}>
                     Stop
                    </Button>
                    <Button colorScheme={"red"} onClick={handleMuted}>
                     Mute
                    </Button>
                </div>
            <hr />
              <Box className="buttons">
                 {
                  videos.map(
                    (urlVideo, i) =>(
                      <Button key={i} colorScheme="blue" onClick={() => setConfigVideo({url:urlVideo})}>{`video ${i + 1}`}</Button>
                    ) 
                  )
                 }
              </Box>
            </Box>
  </div>
 );
}

export default Video;
