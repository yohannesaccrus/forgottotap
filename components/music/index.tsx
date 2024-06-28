"use client";

import { useEffect, useState } from "react";
import Player from "@madzadev/audio-player";

import "./custom.scss";

const Music = ({ source, title }: { source: string; title: string }) => {
  const [showTitle, setShowTitle] = useState<boolean>(false);

  const handleClick = () => {
    setShowTitle(true);
  };

  useEffect(() => {
    const button = document.querySelector("._play_rfl62_1");
    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <div className="music-player">
      <Player
        trackList={[
          {
            url: source,
            title: "",
            tags: ["indie"],
          },
        ]}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        customColorScheme={{
          playerBackground: "#747d8c",
          progressSlider: "#57606f",
          progressUsed: "#ffffff",
          progressLeft: "#ced6e0",
          bufferLoaded: "#a4b0be",
          volumeSlider: "#57606f",
          volumeUsed: "#ffffff",
          volumeLeft: "#ced6e0",
        }}
      />
      {showTitle && <p className="ost fade-in">{title}</p>}
    </div>
  );
};

export default Music;
