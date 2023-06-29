import { useState } from "react";
import "./SearchBar.css";
const SearchItem = ({ setProductSection }) => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setProductSection(e.target[0].value);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" placeholder="Cerca il drink" />
      <input type="submit" value="invio" />
    </form>
  );
};
export default SearchItem;
