"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicWithSound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(231.3765);

  // автозапуск по клику
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);
    return () => document.removeEventListener("click", startAudio);
  }, []);

  // получаем длительность и обновляем прогресс плавно
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log(audio.duration);

    const setAudioDuration = () => setDuration(audio.duration);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    let frameId: number;
    const updateProgress = () => {
      if (audio && !audio.paused) {
        setProgress(audio.currentTime);
      }
      frameId = requestAnimationFrame(updateProgress);
    };
    frameId = requestAnimationFrame(updateProgress);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const buttonSize = 60; // размер кнопки
  const textRadius = 65; // радиус окружности текста
  const containerSize = textRadius * 2;

  return (
    <div className="flex flex-col items-center">
      {/* Аудио */}
      <audio ref={audioRef} src="/music.mp3" loop />

      <div className="flex items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{ width: containerSize, height: containerSize }}
        >
          {/* Круглый текст */}
          <svg
            viewBox="0 0 200 200"
            className="absolute w-full h-full animate-[spin-slow_14s_linear_infinite]"
          >
            <defs>
              <path
                id="circlePathBtn"
                d={`M 100,100
                  m -${textRadius},0
                  a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0
                  a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0`}
              />
            </defs>
            <text fill="black" fontSize="20" fontWeight="bold">
              <textPath href="#circlePathBtn" startOffset="0%">
                ыр - ыр - ыр - ыр - ыр - ыр - ыр - ыр - ыр - ыр - ыр - ыр - ыр -
                ыр - ыр -
              </textPath>
            </text>
          </svg>

          <button
            style={{ width: buttonSize, height: buttonSize }}
            className="sticky z-10"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="black" />
                <rect
                  x="21.6"
                  y="19.2"
                  width="4.8"
                  height="24"
                  rx="2"
                  fill="white"
                />
                <rect
                  x="33.6"
                  y="19.2"
                  width="4.8"
                  height="24"
                  rx="2.4"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="black" />
                <path
                  d="M44.1 30.334C44.7666 30.7189 44.7666 31.6811 44.1 32.066L21.9 44.8832C21.2333 45.2681 20.4 44.787 20.4 44.0172V18.3828C20.4 17.613 21.2333 17.1319 21.9 17.5168L44.1 30.334Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
