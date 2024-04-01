import React, { useEffect, useRef } from 'react';
import audio from '../assets/audio.mp3';

function AudioPlayer() {
    const audioRef = useRef(null);

    useEffect(() => {
        const handleMouseOver = () => {
            if (audioRef.current) {
                audioRef.current.play();
            }
        };

        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            src={audio}
            loop
            preload="auto"
        />
    );
}

export default AudioPlayer;
