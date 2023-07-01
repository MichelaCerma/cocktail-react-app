import { useState } from "react";
import "./FilterSection.css";
const FilterSection = ({
  setGinChecked,
  setRumChecked,
  setVodkaChecked,
  ginChecked,
  rumChecked,
  vodkaChecked,
}) => {
  const onHandleVodka = (e) => {
    setVodkaChecked(e.target.checked);
  };
  const onHandleRum = (e) => {
    setRumChecked(e.target.checked);
  };
  const onHandleGin = (e) => {
    setGinChecked(e.target.checked);
  };

  return (
    <>
      <div className="Ingr">
        <div className={`Ingr__rum ${rumChecked ? "checked" : ""} `}>
          <label>
            rum
            <input
              type="checkbox"
              checked={rumChecked}
              onChange={onHandleRum}
            />
          </label>
        </div>
        <div className={`Ingr__vodka ${vodkaChecked ? "checked" : ""} `}>
          <label>
            vodka
            <input
              type="checkbox"
              checked={vodkaChecked}
              onChange={onHandleVodka}
            />
          </label>
        </div>
        <div className={`Ingr__gin ${ginChecked ? "checked" : ""} `}>
          <label>
            gin
            <input
              type="checkbox"
              checked={ginChecked}
              onChange={onHandleGin}
            />
          </label>
        </div>
      </div>
    </>
  );
};
export default FilterSection;
