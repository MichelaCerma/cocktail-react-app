import ProductSection from "./components/productSection/productSection";
import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/productList/ProductList";
import SearchItem from "./components/searchBar/SearchBar";
import FilterSection from "./components/filterSection/FilterSection";

function App() {
  const [productSection, setProductSection] = useState("");
  const [rumChecked, setRumChecked] = useState(true);
  const [vodkaChecked, setVodkaChecked] = useState(true);
  const [ginChecked, setGinChecked] = useState(true);
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
          <FilterSection
            setGinChecked={setGinChecked}
            ginChecked={ginChecked}
            rumChecked={rumChecked}
            setRumChecked={setRumChecked}
            vodkaChecked={vodkaChecked}
            setVodkaChecked={setVodkaChecked}
          />
          {rumChecked && (
            <ProductList ingr="rum" setProductSection={setProductSection} />
          )}
          {vodkaChecked && (
            <ProductList ingr="vodka" setProductSection={setProductSection} />
          )}
          {ginChecked && (
            <ProductList ingr="gin" setProductSection={setProductSection} />
          )}
        </>
      )}
    </>
  );
}

export default App;
