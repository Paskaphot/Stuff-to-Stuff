import { useState } from "react";
import Select from "react-select";

function Selector({ options }) {
  const [selectOne, setSelectOne] = useState();
  const [selectTwo, setSelectTwo] = useState();

  console.warn(selectOne);
  console.warn(selectTwo);

  const compareClick = () => {};

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
    </form>
  );
}

export default Selector;
