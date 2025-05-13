"use client";

import { Box, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import styles from "./videoCard.module.css";

const VideoSection = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const toggleMute = (
    video: HTMLVideoElement | null,
    setIsMuted: (value: boolean) => void
  ) => {
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <Box className={styles.videoWrapper}>
      <Box className={styles.videoContainer}>
        <video
          ref={videoRef1}
          src="assets/vedio/danny-quick.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        />
        <IconButton
          className={styles.iconButton}
          onClick={() => toggleMute(videoRef1.current, setIsMuted1)}
        >
          <span className={isMuted1 ? styles.playIcon : styles.stopIcon}></span>
        </IconButton>
      </Box>

      <Box className={styles.videoContainer}>
        <video
          ref={videoRef2}
          src="assets/vedio/adam-mcintee.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        />
        <IconButton
          className={styles.iconButton}
          onClick={() => toggleMute(videoRef2.current, setIsMuted2)}
        >
          <span className={isMuted2 ? styles.playIcon : styles.stopIcon}></span>
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoSection;
