import React, { useState, useEffect } from "react";
import WheelSegmentsContext from "./wheelContext";
import { useRouter } from "next/router";

const WheelState = (props) => {
  const router = useRouter();
  const [wheelSegments, setWheelSegments] = useState([
  
  ]);

  const [result, setResult] = useState([]);
  const [showingConfatti, setShowConfatti] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const[isSping,setIsSping] = useState(false)
  const [theme,setTheme] = useState([{
    fillStyle: "rgb(1, 22, 39)",
    textFillStyle: "#fff",
  },

  {
    fillStyle: "rgb(247, 23, 53)",
    textFillStyle: "#fff",
  },

  {
    fillStyle: "rgb(65, 234, 212)",
    textFillStyle: "#000",
  },
  {
    fillStyle: "rgb(253, 255, 252)",
    textFillStyle: "#000",
  },



]);




  useEffect(() => {
    setResult([]);
    // setWheelSegments([]);
  }, [router.asPath]);

  // -----------------this is for style qr code----------------

  // -------------------Create style qr code----------

  useEffect(() => {
    const local = localStorage.getItem("nightmode");
    if (!local) {
      setNightMode(true);
      return;
    }
    if (local == "on") {
      setNightMode(true);
    } else if (local == "off") {
      setNightMode(false);
    }
  }, []);

  return (
    <>
      <WheelSegmentsContext.Provider
        value={{
          wheelSegments: wheelSegments,
          setWheelSegments: setWheelSegments,
          setResult,
          result,
          showingConfatti,
          setShowConfatti,
          nightMode,
          setNightMode,
          setTheme,
          theme,
          setIsSping,
          isSping
        }}
      >
        {props.children}
      </WheelSegmentsContext.Provider>
    </>
  );
};

export default WheelState;
