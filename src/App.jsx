import ProductSection from "./components/productSection/productSection";
import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/productList/ProductList";

function App() {
  const [productSection, setProductSection] = useState();

  return (
    <>
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList ingr="Rum" setProductSection={setProductSection} />
          <ProductList ingr="Vodka" setProductSection={setProductSection} />
          <ProductList ingr="Gin" setProductSection={setProductSection} />
        </>
      )}
    </>
  );
}

export default App;
