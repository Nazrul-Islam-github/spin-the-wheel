
import Style from "../../styles/PopularText.module.scss";
import { _boldtextgen } from "./genItalic";
import { useEffect, useState } from "react";
import Link from "next/link";


const CursiveTxT = () => {

  const [boldTexts, setBoldTexts] = useState([]);
  const handleInput = (event) => {
    try {
      let value =
        event.target.value != ""
          ? event.target.value
          :"Italic Text Generator";
      const text = _boldtextgen(value);
      setBoldTexts(text);
    } catch (error) {
      console.error(error.message);
    }
  };

  // ----------------Copy Fonts-------------
  const copy = async (event) => {
    try {
      const copyMesEle = event.target.nextSibling;
      const value = event.target.previousSibling.value;

      navigator.clipboard.writeText(value);

      copyMesEle.style.top = "10px";
      setTimeout(() => {
        copyMesEle.style.top = "-40px";
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  // ----------------Copy Fonts End-------------

  useEffect(() => {
    const text = _boldtextgen("Italic Text Generator");
    setBoldTexts(text);
  }, []);
  return (
    <>
      <div className={Style.MainContainer}>
        <div className={Style.Hero}>
          <div className={Style.HeadContent}>
            <h1>Bold Italic Text Generator</h1>
            {/* <p>Convert normal text into cursive text</p> */}
          </div>

          <div className={Style.TextInput}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z" />
            </svg>
            <textarea
              className={Style.TextArea}
              placeholder={`╰☆☆ Type or Paste Text Here ☆☆╮`}
              onChange={handleInput}
              //   ref={ref}
            ></textarea>
         
          </div>

          {/* -------------Show Fonts--------------- */}
          <div className={Style.ShowTextDivContainer}>
            {/* --------------popularText--------------- */}
            <div className={Style.FontsCategorie}>
              <h2>Preview Italic Text</h2>

              {boldTexts &&
                boldTexts[0] != undefined &&
                boldTexts[0].cursive != undefined &&
                boldTexts[0].cursive.length > 0 &&
                boldTexts[0].cursive.map((ele, index) => {
                  return (
                    <div
                      key={Math.random() * Math.random() + Math.random()}
                      className={Style.SingleFonts}
                    >
                      <input
                        type="text"
                        defaultValue={ele}
                        className={Style.Font}
                      />

                      <span className={Style.Copy} onClick={copy}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" />
                        </svg>{" "}
                        Copy
                      </span>

                      <span className={Style.CopiedMsg}>Copied!</span>
                     

                      {/* -------Copy message-- */}
                    </div>
                  );
                })}
            </div>
            {/* --------------popularText End--------------- */}

            {/* bold italic */}
            <div className={Style.FontsCategorie}>
              <h4>Bold Italic Text Generator</h4>

              {boldTexts &&
                boldTexts[0] != undefined &&
                boldTexts[0].boldItalic != undefined &&
                boldTexts[0].boldItalic.length > 0 &&
                boldTexts[0].boldItalic.map((ele, index) => {
                  return (
                    <div
                      key={Math.random() * Math.random() + Math.random()}
                      className={Style.SingleFonts}
                    >
                      <input
                        type="text"
                        defaultValue={ele}
                        className={Style.Font}
                      />

                      <span className={Style.Copy} onClick={copy}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" />
                        </svg>{" "}
                        Copy
                      </span>

                      <span className={Style.CopiedMsg}>Copied!</span>
                   

                      {/* -------Copy message-- */}
                    </div>
                  );
                })}
            </div>
          </div>
          {/* -------------Show Fonts--------------- */}

          <div className={Style.Content}>

<h3>Generate Bold Italic Text</h3>

<p>
Italic text generator can make your text stand out and look more professional. Italicized text is commonly used for emphasis, such as in titles, subtitles, or quotes. It can also be used to indicate foreign words, scientific names, and other types of specialized terms.
<a href="https://myfancytext.com/mirror-text-generator/">Mirror Text Generator</a>
</p>
          
   
            {/* <span style={{ fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif", fontSize: "14px" }}>Last updated <time>15/03/2023.</time> </span> */}
          </div>
        </div>

        <div className={Style.Aside}>
          <div className={Style.Sticy}>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default CursiveTxT;
