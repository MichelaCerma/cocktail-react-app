import { useEffect } from "react";

const ProductList = () => {
  useEffect(() =>
    fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin").then((data) =>
      console.log(data)
    )
  );

  return <></>;
};
export default ProductList;
