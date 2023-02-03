import { useState } from "react";
import Select from "react-select";

function Selector({ options }) {
  const [selectOne, setSelectOne] = useState();
  const [selectTwo, setSelectTwo] = useState();
  const [result, setResult] = useState();

  console.warn(selectOne);
  console.warn(selectTwo);

  const compareClick = () => {
    setResult(true);
  };

  return (
    <form className="selector">
      <p className="selector__title">Comparons n'importe quoi !</p>
      <div className="flexWrapper">
        <Select
          id="stuffOne"
          className="flexWrapper__item"
          placeholder='Choisissez un "stuff"'
          options={options}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#43d9ac",
              primary: "#017a6c",
            },
          })}
          onChange={(choice) => setSelectOne(choice.value)}
        />
        <p className="isVersus isVersus--noShrink">/ VS /</p>
        <Select
          id="stuffTwo"
          className="flexWrapper__item"
          placeholder='Choisissez un autre "stuff"'
          options={options}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#43d9ac",
              primary: "#017a6c",
            },
          })}
          onChange={(choice) => setSelectTwo(choice.value)}
        />
      </div>
      <div className="selector_btn">
        <button type="button" className="customBtn" onClick={compareClick}>
          Compare
        </button>
      </div>
      {result ? (
        <div className="result">
          <div className="flexWrapper">
            <p className="flexWrapper__item resultText">
              <span className="resultText__number">1 </span>
              <span className="hoverCard hoverCard--hippo">hippopotame</span>
            </p>
            <p className="isEqual isEqual--noShrink">=</p>
            <p className="flexWrapper__item resultText">
              <span className="resultText__number">1 250 </span>
              <span className="hoverCard hoverCard--fer">fer à repasser</span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}

export default Selector;
