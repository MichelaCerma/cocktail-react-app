import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import ProductItem from "../productItem";
import "./ProductList.css";

const ProductList = ({ ingr, setProductSection, setFilterList }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingr)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks));
  }, []);
  return (
    <div className="ProductList">
      <h2>{ingr}</h2>
      {listData.map((drink) => (
        <ProductItem
          data={drink}
          setProductSection={setProductSection}
          key={drink.idDrink}
        />
      ))}
    </div>
  );
};
export default ProductList;
