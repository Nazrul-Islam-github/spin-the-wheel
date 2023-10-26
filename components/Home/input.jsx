import Style from "../../styles/input.module.scss";
import wheelContext from "@/context/wheelContext";
import { useContext, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { shuffle, AtoZ } from "../../Functions/shuffle";
import Dark from "../../styles/Dark.module.scss";
import Light from "../../styles/Light.module.scss";
let id = 0;
function getId() {
  return id++;
}
const Input = () => {
  const context = useContext(wheelContext);
  const { wheelSegments, setWheelSegments, setResult, result,setShowConfatti ,nightMode} = context;
  const [value, setValue] = useState(
    "choice 1 \nchoice 2 \nchoice 3\nchoice 4\nchoice 5\nchoice 6\nchoice 7\nchoice 8\nchoice 9"
  );

  const [showTable, setShowTable] = useState({ entry: true, result: false });



  const handleInput = (event) => {
    const txt = event.target.value;
    setValue(txt);
  };



  useEffect(() => {
    const arr = value.split("\n");


const filter = arr.filter(e=>{
  return e!=""
})
   

    setWheelSegments(filter);

  }, [value]);

  const handleShuffle = () => {
    const arrayConvert = value.split("\n");
    const shuffleArray = shuffle(arrayConvert);
    const join = shuffleArray.join("\n");
    setValue(join);
  };

  const handleSort = () => {
    if (showTable.entry) {
      const arrayConvert = value.split("\n");
      const sorting = AtoZ(arrayConvert);
      const join = sorting.join("\n");
      setValue(join);
    } else if (showTable.result) {
      const sorting = AtoZ(result);

      setResult(sorting);
    }
  };
  return (
    <>
      <div className={Style.Container}>
        <div className={Style.selectGroup}>
          <div>
            <button
              onClick={() => setShowTable({ entry: true, result: false })}
              style={{
                borderBottom: showTable.entry
                  ? "2px solid var(--bs-gray-700)"
                  : "none",
                  color:nightMode?"var(--bs-ligth)":"var(--bs-dark)"
              }}
            >
              Entries <b>{wheelSegments.length}</b>
            </button>
          </div>

          <div>
            <button
              onClick={() => setShowTable({ entry: false, result: true })}
              style={{
                borderBottom: showTable.result
                  ? "2px solid var(--bs-gray-700)"
                  : "none",
                  color:nightMode?"var(--bs-ligth)":"var(--bs-dark)"
              }}
            >
              Result <b>{result.length}</b>
            </button>
          </div>
        </div>
<div className={Style.Mango}>
        {/* Suffle and sort div */}
        <div className={Style.ShuffleButtons}>
          {showTable.entry && (
            <button onClick={handleShuffle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
              </svg>
              Shuffle
            </button>
          )}
          <button onClick={handleSort}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m80-280 150-400h86l150 400h-82l-34-96H196l-32 96H80Zm140-164h104l-48-150h-6l-50 150Zm328 164v-76l202-252H556v-72h282v76L638-352h202v72H548ZM360-760l120-120 120 120H360ZM480-80 360-200h240L480-80Z" />
            </svg>
            Sort
          </button>
          {showTable.result && (
            <button className={Style.Clear} onClick={() => setResult([])}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
              Clear
            </button>
          )}
        </div>


{/* show input  */}
        {showTable.entry && (
          <div
            style={{
              transition: "all .3s linear",
              transform: showTable.result
                ? "translateX(-110%)"
                : "translateX(0%)",
            }}
            className={Style.TextArea}
          >
            <textarea onChange={handleInput} className={nightMode?Dark.darkInput:Light.ligthInput}  value={value}></textarea>
          </div>
        )}

        {/* ----result div */}
        {showTable.result && (
          <div className={Style.Result}>
            {result.map((ele, index) => {
              return (
                <b
                  key={Math.random() * Math.random().toString()}
                  style={{ display: "block" }}
                >
                  {ele}
                </b>
              );
            })}
          </div>
        )}
</div>

      </div>
    </>
  );
};

export default Input;
