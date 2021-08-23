import React, { useState, useRef } from "react";
import AudioControls from "./AudioControls";
import LinesBars from "./LinesBars";
import "./styles-components/radio.css";
import "./styles-components/radio.css";
import $ from "jquery";

const AudioPlayer = () => {
  const ZenoUrl = "http://stream.zeno.fm/71r6wh50ng8uv" 
  const radio = {
    audioSrc: (ZenoUrl + "?noCache=" + Math.floor(Math.random() * 1000000))}

  // State
  const [isPlaying, setIsPlaying] = useState(true);

  // Destructure for conciseness
  const { audioSrc } = radio;
  var height = "";
  // Refs
  var audioRef = useRef(new Audio(audioSrc));



  const playPromise = audioRef.current.play();
 

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
       
        audioRef.current.pause();
        if (!isPlaying) {
          audioRef.current.pause();
          console.log(audioRef);
          waveAfterWave();
        } else {
          
          console.log(audioRef);
          audioRef.current.play();
          $(".wave").removeClass("no-animation");
        }
        if (audioRef.current.paused) {
          setIsPlaying(false);
          audioRef.current.pause();
        }

        console.log("audio played auto");
      })
      .catch((error) => {
        waveAfterWave();
        console.log("playback prevented");
        setIsPlaying(false);
      });
  }

  function waveAfterWave() {
    $(".wave").each(function () {
      height = $(this).height();
      $(this).css("height", height);
    });
    $(".wave").addClass("no-animation");
  }

  return (
    <div className="container_radio">
      <div className="radio-container">
        <div className="radio-body">
          <LinesBars />
          <div className="button">
            <AudioControls
              isPlaying={isPlaying}
              onPlayPauseClick={setIsPlaying}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
