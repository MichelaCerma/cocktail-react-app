import ProductSection from "./components/productSection/productSection";
import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/productList/ProductList";
import SearchItem from "./components/searchBar/SearchBar";

function App() {
  const [productSection, setProductSection] = useState("margarita");


  return (
    <>
      <SearchItem setProductSection={setProductSection} />

      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList
            ingr="Rum"
            setProductSection={setProductSection}
            setFilterList={setFilterList}
          />
          <ProductList ingr="Vodka" setProductSection={setProductSection} />
          <ProductList ingr="Gin" setProductSection={setProductSection} />
        </>
      )}
    </>
  );
}

export default App;
