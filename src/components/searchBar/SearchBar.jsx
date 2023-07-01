import { useState } from "react";
import "./SearchBar.css";
const SearchItem = ({ setProductSection }) => {
  const [inputValue, setInputValue] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setProductSection(inputValue);
  };
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={onHandleSubmit} className="searchBar">
      <input
        type="text"
        placeholder="Cerca il drink"
        value={inputValue}
        onChange={onHandleChange}
      />
      <input type="submit" value="invio" />
    </form>
  );
};
export default SearchItem;
