import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Style from "../../styles/Home.module.scss";

import wheelContext from "@/context/wheelContext";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Setting({ isOpen, setopen }) {
  const [open, setIsOpen] = React.useState(isOpen);
  const context = useContext(wheelContext);
  const { setTheme } = context;
  const router = useRouter();




  // --------Set Custom Wheel Theme for diffrent Page
  React.useEffect(() => {
    setTheme([
      { fillStyle: "#F7BE16", textFillStyle: "#fff" },
      { fillStyle: "#00BDAA", textFillStyle: "#fff" },
      { fillStyle: "#FF502F", textFillStyle: "#fff" },
      { fillStyle: "#614AD3", textFillStyle: "#fff" },
    ]);
  }, []);



  const [color] = React.useState([

    {
      id: 81,
      color1: { bg: "#F7BE16", color: "#fff" },
      color2: { bg: "#00BDAA", color: "#fff" },
      color3: { bg: "#FF502F", color: "#fff" },
      color4: { bg: "#614AD3", color: "#fff" },
    },
    {
      id: 2,
      color1: { bg: "rgb(155, 93, 229)", color: "#000" },
      color2: { bg: "rgb(241, 91, 181)", color: "#fff" },
      color3: { bg: "rgb(254, 228, 64)", color: "#000" },
      color4: { bg: "rgb(0, 187, 249)", color: "#000" },
    },

    {
      id: 5,
      color1: { bg: "#ff6166", color: "#fff" },
      color2: { bg: "#0d6efd", color: "#000" },
      color3: { bg: "#ffc107", color: "#000" },
      color4: { bg: "#6610f2", color: "#fff" },
    },

    {
      id: 6,
      color1: { bg: " rgb(35, 38, 37)", color: "#fff" },
      color2: { bg: "rgb(100, 115, 98)", color: "#fff" },
      color3: { bg: "rgb(255, 86, 41)", color: "#000" },
      color4: { bg: "rgb(210, 217, 184)", color: "#000" },
    },

    {
      id: 3,
      color1: { bg: "rgb(1, 22, 39)", color: "#fff" },
      color2: { bg: "rgb(247, 23, 53)", color: "#fff" },
      color3: { bg: "rgb(65, 234, 212)", color: "#000" },
      color4: { bg: "rgb(253, 255, 252)", color: "#000" },
    },
    {
      id: 12,
      color1: { bg: "rgb(43, 171, 94)", color: "#000" },
      color2: { bg: "rgb(242, 192, 84)", color: "#000" },
      color3: { bg: "rgb(92, 133, 199)", color: "#000" },
      color4: { bg: "rgb(219, 77, 77)", color: "#000" },
    },

    {
      id: 1,
      color1: { bg: "rgb(255, 64, 78)", color: "#000" },
      color2: { bg: "rgb(1, 45, 65)", color: "#fff" },
      color3: { bg: "rgb(27, 165, 184)", color: "#000" },
      color4: { bg: "rgb(218, 236, 243)", color: "#000" },
    },

    {
      id: 4,
      color1: { bg: "rgb(75, 63, 114)", color: "#fff" },
      color2: { bg: "rgb(255, 200, 87)", color: "#000" },
      color3: { bg: "rgb(17, 157, 164)", color: "#000" },
      color4: { bg: "rgb(234, 210, 172)", color: "#000" },
    },


  



    {
      id: 7,
      color1: { bg: "rgb(217, 78, 115)", color: "#000" },
      color2: { bg: "rgb(242, 216, 201)", color: "#000" },
      color3: { bg: "rgb(89, 47, 32)", color: "#fff" },
      color4: { bg: "rgb(217, 167, 150)", color: "#000" },
    },
    {
      id: 8,
      color1: { bg: "#ffc107", color: "#000" },
      color2: { bg: "#fd7e14", color: "#000" },
      color3: { bg: "#dc3545", color: "#fff" },
      color4: { bg: "#0dcaf0", color: "#000" },
    },
  ]);

  const handleClose = () => {
    setIsOpen(false);
    setopen(false);
  };

  React.useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  // -----------Remove Segment from wheel

  const handleClick = (event) => {
    const parent = event.target;
    const [...spans] = parent.querySelectorAll("span");
    const array = [];

    for (let i = 0; i < spans.length; i++) {
      const obj = {
        fillStyle: spans[i].style.background,
        textFillStyle: spans[i].style.color,
      };

      array.push(obj);
    }
    setTheme(array);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
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
        <Fade in={open} id={Style.MODALwidth}>
          <div className={Style.Alert}>
            <div
              style={{
                padding: "15px 18px",
                fontSize: "28px",
                fontWeight: "bold",
                color: "var(--bs-dark)",
                letterSpacing: "1px",
              }}
            >
              <b>Theme:</b>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {color.map((e) => {
                  return (
                    <div
                      key={e.id}
                      onClick={handleClick}
                      style={{
                        width: "55px",
                        height: "29px",
                        display: "flex",
                        margin: "7px",
                        borderRadius: "4px",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "12px",
                          background: e.color1.bg,
                          color: e.color1.color,
                          pointerEvents: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "inline-block",
                          width: "12px",
                          background: e.color2.bg,
                          color: e.color2.color,
                          pointerEvents: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "inline-block",
                          width: "12px",
                          background: e.color3.bg,
                          color: e.color3.color,
                          pointerEvents: "none",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "inline-block",
                          width: "12px",
                          background: e.color4.bg,
                          color: e.color4.color,
                          pointerEvents: "none",
                        }}
                      ></span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={Style.Btns}>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </Fade>
      </Modal>

      {/* {open.open && <ConfettiExplosion zIndex={30}  force={0.6} />} */}
    </div>
  );
}
