import React, { useEffect, useState } from 'react';
import '../global.scss';
import soundfile1 from '../sounds/bubbles.mp3';
import soundfile2 from '../sounds/clay.mp3';
import soundfile3 from '../sounds/confetti.mp3';
import soundfile4 from '../sounds/glimmer.mp3';
import soundfile5 from '../sounds/moon.mp3';
import soundfile6 from '../sounds/green.mp3';
import soundfile7 from '../sounds/rock.mp3';
import soundfile8 from '../sounds/ufo.mp3';
import Lottie from 'react-lottie';
import bubbleData from '../lotties/bubble.json';

function Cards() {
  const [isStopped, setisStopped] = useState(false);
  const [postop, setpostop] = useState(0);
  const [posLeft, setposLeft] = useState(0);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: bubbleData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const playMusic = (e, index) => {
    const getsource = document.querySelector(`.sound${index}`);
    getsource.currentTime = 0;
    getsource.play();
    setisStopped(!isStopped);
  };

  return (
    <div className='music-box-container'>
      <div className='buble-animation'>
        <Lottie
          options={defaultOptions}
          height={100}
          width={100}
          isStopped={isStopped}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className='card path1' onClick={(e) => playMusic(e, 1)}>
        <audio className='sound1' src={soundfile1}></audio>
      </div>
      <div className='card path2' onClick={(e) => playMusic(e, 2)}>
        <audio className='sound2' src={soundfile2}></audio>
      </div>
      <div className='card path3' onClick={(e) => playMusic(e, 3)}>
        <audio className='sound3' src={soundfile3}></audio>
      </div>
      <div className='card path4' onClick={(e) => playMusic(e, 4)}>
        <audio className='sound4' src={soundfile4}></audio>
      </div>
      <div className='card path5' onClick={(e) => playMusic(e, 5)}>
        <audio className='sound5' src={soundfile5}></audio>
      </div>
      <div className='card path6' onClick={(e) => playMusic(e, 6)}>
        <audio className='sound6' src={soundfile6}></audio>
      </div>
      <div className='card path7' onClick={(e) => playMusic(e, 7)}>
        <audio className='sound7' src={soundfile7}></audio>
      </div>

      <div className='card path8' onClick={(e) => playMusic(e, 8)}>
        <audio className='sound8' src={soundfile8}></audio>
      </div>
    </div>
  );
}

export default Cards;
