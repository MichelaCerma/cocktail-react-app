import ProductSection from "./components/productSection/productSection";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [productSection, setProductSection] = useState("margarita");

  return (
    <>
      <ProductSection productSection={productSection} />
    </>
  );
}

export default App;
