import { drinks } from "../../mock/cocktail";
import "./productSection.css";

const ProductSection = () => {
  const drink = drinks[0];
  return (
    <div className="Drink">
      <img
        className="Drink__img"
        src={`${drink.strDrinkThumb}`}
        alt={drink.strDrink}
      />
      <div className="Drink__text">
        <h1 className="Drink__title">{drink.strDrink}</h1>
        <h3 className="Drink__category">{drink.strCategory}</h3>
        <div className="Drink__ingredients">
          <p>
            {" "}
            <span className="Drink__ingredients--title">Ingredients: </span>
            {drink.strIngredient1},
          </p>
          <p>{drink.strIngredient2},</p>
          <p>{drink.strIngredient3}</p>
        </div>
        <p className="Drink__instructions">
          <span className="Drink__instructions--title">Instructions: </span>
          {drink.strInstructions}
        </p>
      </div>
    </div>
  );
};
export default ProductSection;
