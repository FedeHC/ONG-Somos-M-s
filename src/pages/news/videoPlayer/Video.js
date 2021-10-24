import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"
import { IoPlay, IoPause, IoStop, IoVolumeMute } from "react-icons/io5";

const Video = () => {
  const videos = [
    "https://www.youtube.com/watch?v=Zp8aZmqf_rU",
    "https://www.youtube.com/watch?v=4YnSk1gI_Oo",
  ];
  const [isPlaying, setIsPlaying] = useState(false);

  const [configVideo, setConfigVideo] = useState({
    url: "https://www.youtube.com/watch?v=Zp8aZmqf_rU",
    controls: false,
    volume: 0.8,
    muted: false,
  });

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handleStop = () => {
    setConfigVideo({ ...configVideo, url: null });
    setIsPlaying(false);
  };
  const handleMuted = () => {
    setConfigVideo({ ...configVideo, muted: !configVideo.muted });
    console.log(configVideo.muted);
  };

  const { url, controls, volume, muted } = configVideo;
  return (
      <Box w="100%" h="100%">
        <Heading size="xl" >Últimos Eventos</Heading>
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          controls={controls}
          playing={isPlaying}
          muted={muted}
          volume={volume}
          className="video"
        />
        <div className="controllers">
          <Button m={2} colorScheme={"green"} onClick={handlePlay}>
            {isPlaying ? <IoPause /> : <IoPlay />}
          </Button>
          <Button m={2} colorScheme={"red"} onClick={handleStop}>
            <IoStop />
          </Button>
          <Button m={2} bg={"#00214D"} color={"white"} onClick={handleMuted}>
            <IoVolumeMute />
          </Button>
        </div>
        <hr />
        <Box className="buttons">
          {videos.map((urlVideo, i) => (
            <Button
              me={2}
              key={i}
              color={"white"}
              bg={"#00214D"}
              onClick={() => setConfigVideo({ url: urlVideo })}
            >{`video ${i + 1}`}</Button>
          ))}
        </Box>
      </Box>
  );
};

export default Video;
