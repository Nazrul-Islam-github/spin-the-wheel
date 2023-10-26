import Style from "../../styles/newfooter.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import wheelContext from '@/context/wheelContext';
import { useContext } from 'react';
import Dark from "@/styles/Dark.module.scss";
import Light from "@/styles/Light.module.scss"
const Footer = () => {
  const [year, setYear] = useState(2022);
  const context = useContext(wheelContext);
const {nightMode,setNightMode} = context;
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <>
      <footer className={`${Style.Footer} ${nightMode?Dark.Footer:Light.Footer}`}>
        <div className={Style.Main}>
     

          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className={Style.EE}
          >
            <div className={`${Style.Card} ${nightMode?Dark.Card:Light.Card}`}>
              <span>Spinner Wheels</span>
              <ul>
                <li>
                  <a href="https://randompickerwheel.com/yes-or-no">Yes or No Wheel</a>
                </li>
            
         

                <li>
            
            <a href="https://myfancytext.com/" title="Stylish Text Generator">Generate Stylish Text</a>
          </li>

           
              </ul>
            </div>

            

          
       

       
          </div>
        </div>

        {/* ----copy right div */}
      </footer>

      {/* <div className={Style.Copy}>
        <span>&#169; {year} myfancytext.com </span>
        <span> | All Rights Reserved.</span>
      </div> */}
    </>
  );
};

export default Footer;
