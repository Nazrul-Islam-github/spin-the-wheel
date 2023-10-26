import { Winwheel } from "../../Functions/Winwheel";

import Style from "../../styles/Home.module.scss";
import Alert from "./alert";
import { useEffect, useState, useContext } from "react";
import wheelContext from "@/context/wheelContext";
const MobileWheel = () => {
  const [Wheel, setWheel] = useState();
  const [isMobile, setIsMobile] = useState(true);
  const [modalOpen, setModalOpen] = useState({
    open: false,
    message: "hi",
    wheel: null,
  });

  const [spinDisable, setSpinDisable] = useState(false);
  const [fristSpin, setFristSpin] = useState(false);

  // -----------Wheel Segments Context------
  const context = useContext(wheelContext);
  const { wheelSegments, setWheelSegments,nightMode } = context;
  useEffect(() => {

    console.log(wheelSegments);
    if (window.innerWidth < 500) {
      setIsMobile(true);
    }
    if (wheelSegments <= 0) {
      setSpinDisable(true);
      // console.log("im disable");
    } else {
      setSpinDisable(false);
    }
    let colourWheel = new Winwheel({
      numSegments: wheelSegments.length,
      outerRadius: 160,
      canvasId: "canvas",
      pointerAngle: 90,
      lineWidth: 1,
      innerRadius: 30, // Remember to specify if not default of 0 degrees.
      //   'responsive': true,
      segments: [...wheelSegments],
      strokeStyle: "transparent",
      textFontSize:
      wheelSegments.length>30?"12":
        wheelSegments.length < 10
          ? "24"
          : wheelSegments.length < 16
          ? "20"
          : "18",

      // Size of the segment text.
      textFontWeight: "300",
      animation: {
        type: "spinToStop",
        duration: 6,
        spins: 10,
        callbackSound: playSound, // Specify function to call when sound is to be triggered.
        soundTrigger: "pin",
        // To do something after the animation has finished specify callback function.
        callbackFinished: winAnimation,

        // During the animation need to call function to re-draw triangle.
      },
      // Specify pin parameters.
      pins: {
        number: 8,
        outerRadius: 0,
        margin: 10,
        fillStyle: "none",
        strokeStyle: "none",
      },
    });

    function winAnimation() {
      // Wheel.draw();
      if (colourWheel) {
        let winningSegment = colourWheel.getIndicatedSegment();
        // alert("You have won " + winningSegment.text + "!");
        setModalOpen({
          open: true,
          message: winningSegment.text,
          id: winningSegment.id,
          wheel: colourWheel,
          fullText: winningSegment.fulltext,
        });

        setSpinDisable(false)
      }
    }
    let audio = new Audio("tick.mp3"); // Create audio object and load desired file.

    // audio = new Audio('tick.mp3');
    async function playSound() {
      console.log("play");
      // Stop and rewind the sound (stops it if already playing).
      audio.pause();
      audio.currentTime = 0;

      // Play the sound.
      audio.play().catch((error) => {
        console.log(error);
      });
    }
    setWheel(colourWheel);
  }, [wheelSegments]);

  // Draw pointer on canvas, this time on the right.

  const spin = () => {
    setFristSpin(true);
    setSpinDisable(true);
    Wheel.startAnimation();
  };

  return (
    <>
      <style>
        {`
    
@keyframes rotating {
  from{
      transform: rotate(0deg);
  }
  to{
     transform: rotate(360deg);
  }
}
    
    `}
      </style>

      <div className={Style.CanvasDiv}>
       
          <canvas
            id="canvas"
            className={Style.Canvas}
            width="300"
            height="300"
            style={{
              animation: !fristSpin ? "rotating 16s linear infinite" : "none",
            }}
          >
            Canvas not supported, use another browser.
          </canvas>
    

        <div id={Style.shave}>
          <svg
            width="119"
            height="77"
            viewBox="0 0 119 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 38.5L118.5 0.827896L118.5 76.1721L0 38.5Z"
              fill="black"
            />
          </svg>
        </div>
        <Alert data={modalOpen} />
        <button onClick={spin}   style={{ color: nightMode ? "var(--bs-light)" : "var(--bs-dark)" }} className={Style.Spin} disabled={spinDisable}>
          Spin
        </button>
      </div>
    </>
  );
};

export default MobileWheel;
