import { Winwheel } from "../../Functions/Winwheel";
import { useEffect, useState, useContext } from "react";
import Style from "../../styles/Home.module.scss";
import Alert from "./alert";
import wheelContext from "@/context/wheelContext";
let id = 0;
function getId() {
  return id++;
}
const DeskTopWheel = () => {
  const [Wheel, setWheel] = useState();
  const [isMobile, setIsMobile] = useState(true);
  const [modalOpen, setModalOpen] = useState({
    open: false,
    message: "hi",
    wheel: null,
    id: null,
  });
  const [fristSpin, setFristSpin] = useState(false);
  const [spinDisable, setSpinDisable] = useState(false);

  const context = useContext(wheelContext);
  const { wheelSegments, nightMode, theme } = context;

  useEffect(() => {

    console.log(wheelSegments);
    if (window.innerWidth < 500) {
      setIsMobile(true);
    }

    if (wheelSegments <= 0) {
      setSpinDisable(true);
    } else {
      setSpinDisable(false);
    }


    // this for check if wheelSegments array already has object inside
    if (wheelSegments[0] && wheelSegments[0].text) return;

    const segments = addColor(wheelSegments, theme);


    const sortLongText = segments.map((ele) => {
      if (ele.text.length > 8) {
        return { ...ele, text: ele.text.slice(0, 6) + "..." };
      } else {
        return { ...ele };
      }
    });


    const colourWheel = new Winwheel({
      numSegments: sortLongText.length,
      outerRadius: 245,
      canvasId: "canvas",
      pointerAngle: 90,
      lineWidth: 1,
      innerRadius: 30, // Remember to specify if not default of 0 degrees.
      //   'responsive': true,
      segments: [...sortLongText],
      strokeStyle: "transparent",
      textMargin: 12,

      textFontSize:
        wheelSegments.length > 24
          ? "25"
          : wheelSegments.length > "30"
          ? "20"
          : wheelSegments.length < 23
          ? "35"
          : "20",

      // Size of the segment text.
      textFontWeight: "500",
      animation: {
        type: "spinToStop",
        duration: 6,
        spins: 10,
        callbackSound: playSound, // Specify function to call when sound is to be triggered.
        soundTrigger: "segment",
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

    // console.log(wheelSegments);
    // console.log(colourWheel);

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

        setSpinDisable(false);
      }
    }

    let audio = new Audio("tick.mp3"); // Create audio object and load desired file.

    // audio = new Audio('tick.mp3');
    async function playSound() {
      // Stop and rewind the sound (stops it if already playing).
      audio.pause();
      audio.currentTime = 0;

      // Play the sound.
      audio.play().catch((error) => {
        console.log(error);
      });
    }
    setWheel(colourWheel);
  }, [wheelSegments, theme]);

  // Draw pointer on canvas, this time on the right.

  const spin = () => {
    setFristSpin(true);
    setSpinDisable(true);
    Wheel.startAnimation();
  };

  // ----resize wheel
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function resize() {
    const width = window.outerWidth;
    // alert(width)
    const canvasDiv = document.getElementById("canvasdiv");
    if (width > 935) {
      canvasDiv.style.width = "500px";
      canvasDiv.style.height = "500px";
      canvasDiv.firstChild.style.width = "500px";
      canvasDiv.firstChild.style.height = "500px";
      return;
    }

    const parcent = (width / 100) * 80;
    canvasDiv.style.width = Math.round(parcent) + "px";
    canvasDiv.style.height = Math.round(parcent) + "px";
    canvasDiv.firstChild.style.width = Math.round(parcent) + "px";
    canvasDiv.firstChild.style.height = Math.round(parcent) + "px";
  }

  const addColor = (text, color) => {
    const result = [];

    for (let i = 0; i < text.length; i += 4) {
      const obj1 = {
        id: getId(),
        text: text[i],
        fulltext: text[i],
        ...color[0],
      };
      result.push(obj1);

      if (text[i + 1] === undefined) break;
      const obj2 = {
        id: getId(),
        text: text[i + 1],
        fulltext: text[i + 1],
        ...color[1],
      };
      result.push(obj2);

      if (text[i + 2] === undefined) break;

      const obj3 = {
        id: getId(),
        text: text[i + 2],
        fulltext: text[i + 2],
        ...color[2],
      };
      result.push(obj3);

      if (text[i + 3] === undefined) break;
      const obj4 = {
        id: getId(),
        text: text[i + 3],
        fulltext: text[i + 3],
        ...color[3],
      };
      result.push(obj4);
    }

    return result;
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
      <div className={Style.CanvasDiv} id="canvasdiv">
        {isMobile && (
          <canvas
            id="canvas"
            className={Style.Canvas}
            width="500"
            height="500"
            style={{
              animation: !fristSpin ? "rotating 16s linear infinite" : "none",
            }}
          >
            Canvas not supported, use another browser.
          </canvas>
        )}

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
        <button
          onClick={spin}
          className={Style.Spin}
          style={{ color: nightMode ? "var(--bs-light)" : "var(--bs-dark)" }}
          disabled={spinDisable}
        >
          Spin
        </button>
      </div>
    </>
  );
};

export default DeskTopWheel;
