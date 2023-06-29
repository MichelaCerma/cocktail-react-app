import { useEffect, useState } from "react";

import "./productSection.css";
import { GET } from "../../utils/http";

const ProductSection = ({ productSection, setProductSection }) => {
  const [drinkInfo, setDrinkInfo] = useState({});
  const onHandleClick = () => setProductSection("");
  useEffect(() => {
    GET("?s=" + productSection).then((data) => setDrinkInfo(data.drinks[0]));
  }, []);

  return (
    <div className="Drink">
      <img
        className="Drink__img"
        src={`${drinkInfo.strDrinkThumb}`}
        alt={drinkInfo.strDrink}
      />
      <div className="Drink__text">
        <h1 className="Drink__title">{drinkInfo.strDrink}</h1>
        <h3 className="Drink__category">{drinkInfo.strCategory}</h3>
        <div className="Drink__ingredients">
          <p>
            {" "}
            <span className="Drink__ingredients--title">Ingredients: </span>
            {drinkInfo.strIngredient1},
          </p>
          <p>{drinkInfo.strIngredient2},</p>
          <p>{drinkInfo.strIngredient3}</p>
        </div>
        <p className="Drink__instructions">
          <span className="Drink__instructions--title">Instructions: </span>
          {drinkInfo.strInstructions}
        </p>
        <button className="Drink__button" onClick={onHandleClick}>
          X
        </button>
      </div>
    </div>
  );
};
export default ProductSection;
