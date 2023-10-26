
import { useState, useEffect,useContext } from "react";
import Style from "../styles/Layout.module.scss";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import NewFooter from "./Footer/NewFooter"
import ReactConfetti from "react-confetti";
import wheelContext from "@/context/wheelContext";


const Layout = ({ children }) => {
  const router = useRouter();
  const [showSideNav, setShowSideNav] = useState(false);
  const [visible, setVisible] = useState(false);
const [windowSize,setWindowSize] = useState({width:null,height:null})
const context = useContext(wheelContext);
const {showingConfatti,nightMode} = context
  // const {isDarkMode} = context;
  const toggle = () => {
    setShowSideNav(!showSideNav);
  };

  const toTop = () => {
    const d = window;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };


useEffect(()=>{
  if(nightMode){
    const body = document.querySelector("body");
    body.style.backgroundColor = "var(--bs-dark)";
    body.style.color= "var(--bs-light"
  }
else{
  const body = document.querySelector("body");
  body.style.backgroundColor = "var(--bs-white)";
  body.style.color= "var(--bs-dark)"
}
},[nightMode])

  useEffect(() => {
    setWindowSize({width:window.innerWidth,height:window.innerHeight})
    window.addEventListener("scroll", toggleVisible);
    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("scroll", toggleVisible);
      window.removeEventListener("resize", handleResize)
    };
  }, []);

  function handleResize(){
    setWindowSize({width:window.innerWidth,height:window.innerHeight})
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // ------------google analytics code

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  //-------------- google analytics code end


  const style = {

    backgroundColor:nightMode?"var(--bs-dark)":"var(--bs-white)",
    color:nightMode?"var(--bs-white)":"var(--bs-dark)",
    minHeight: "100vh"
  }

  return (
    <>
      <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="spin the wheel" />
        <meta charset="UTF-8"/>
        <meta name="google-site-verification" content="TYzL-ZSfLMyLkRpO0sN-Y8HX_ZLhpAZ3TBVUqr_nato" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="distribution" content="Global"/>
        <meta property="og:type" content="website"/>
        <meta property="og:name" content="Spin the wheel"/>
     
     
   
      </Head>


{showingConfatti &&    <ReactConfetti width={windowSize.width} height={windowSize.height} />}
    {/* <ReactConfetti width={windowSize.width} height={windowSize.height} /> */}


      <main style={style}>{children}</main>
      <button
        className={Style.TopBoutton}
        style={{
          opacity: visible ? "1" : "0",
          right: visible ? "1rem" : "-55px",
          backgroundColor: !nightMode?"var(--bs-tomato2)":"var(--bs-indigo)",
        }}
        onClick={toTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M18.625 33.333V11.958l-10 10L6.667 20 20 6.667 33.333 20l-1.958 1.958-10-10v21.375Z" />
        </svg>
      </button>
      <NewFooter />
    </>
  );
};

export default Layout;
