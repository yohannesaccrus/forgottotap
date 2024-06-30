"use client";

import { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";

import "./custom.scss";

const Music = ({
  source,
  title,
  startAt,
  children,
}: {
  source: string;
  title: string;
  startAt?: number;
  children?: React.ReactNode;
}) => {
  const playerRef = useRef(null);
  const [showTitle, setShowTitle] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setShowTitle(true);
  };

  return (
    <div className="music-player">
      <AudioPlayer
        ref={playerRef}
        volume={0.75}
        loop={true}
        src={source}
        customAdditionalControls={[]}
        onPlay={() => {
          handleClick();
          if (playerRef.current) {
            playerRef.current.audio.current.currentTime = startAt;
          }
        }}
      />
      {showTitle && <p className="ost fade-in">{title}</p>}
      {showTitle && <div className="children">{children}</div>}
    </div>
  );
};

export default Music;
