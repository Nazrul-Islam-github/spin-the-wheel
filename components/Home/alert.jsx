import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Style from "../../styles/Home.module.scss";

import wheelContext from "@/context/wheelContext";
import { useContext } from "react";

export default function TransitionsModal({ data }) {
  const [open, setOpen] = React.useState(data);
  const context = useContext(wheelContext);
  const {
    wheelSegments,
    setWheelSegments,
    setResult,
    result,
    setShowConfatti,
  } = context;

  const handleClose = () => {
    setOpen(false);
    if (open.wheel) {
      open.wheel.stopAnimation(false);
      open.wheel.rotationAngle = 0;
    }
  };


  React.useEffect(() => {
    let audio = new Audio("/sound/claps.mp3");
    setOpen(data);
    if (data.fullText) {
      setResult([...result, data.fullText]);

      setShowConfatti(true);
      playClapping()
      setTimeout(() => {
        setShowConfatti(false);
        pause()
      }, 7000);
    }

    function playClapping(){
      audio.play()
    }

    function pause(){
      audio.pause()
    }
  }, [data]);

  // -----------Remove Segment from wheel
  const remove = (winner) => {
    const remv = wheelSegments.filter((item) => {
      return item.id != winner;
    });

    setWheelSegments(remv);
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open.open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* {open.open && <ConfettiExplosion zIndex={30}  force={0.6} />} */}
        <Fade in={open.open}>
          <div className={Style.Alert}>
            <div
              style={{
                width: "100%",
                background: "var(--bs-tomato)",

                padding: "15px 8px",
                overflow: "hidden",
              }}
            >
              <b style={{ fontSize: "20px", color: "var(--bs-light)" }}>
                We Have a winner!
              </b>
            </div>
            <div
              style={{
                padding: "15px 18px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "var(--bs-dark)",
                letterSpacing: "1px",
              }}
            >
              {open.fullText}
              {/* {open.message} */}
            </div>
            <div className={Style.Btns}>
              <button onClick={handleClose}>Close</button>
              <button onClick={() => remove(open.id)}>Remove</button>
            </div>
          </div>
        </Fade>
      </Modal>

      {/* {open.open && <ConfettiExplosion zIndex={30}  force={0.6} />} */}
    </div>
  );
}
