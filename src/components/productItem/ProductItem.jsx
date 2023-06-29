import "./ProductItem.css";

const ProductItem = ({ data, setProductSection }) => {
  const onHandleClick = () => setProductSection(data.strDrink);

  return (
    <div className="ProductItem" onClick={onHandleClick}>
      <p>{data.strDrink}</p>
      <img
        className="ProductItem__img"
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
    </div>
  );
};
export default ProductItem;
