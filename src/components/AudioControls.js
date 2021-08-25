import React from "react";
import { FaPlay as Play } from "react-icons/fa";
import { FaPause as Pause } from "react-icons/fa";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (

  <>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
  </>
);

export default AudioControls;
