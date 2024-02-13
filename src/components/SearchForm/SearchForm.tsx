import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { booksSlice } from "../../store/reducers/BooksSlice";
import "./SearchForm.scss";

import block from "bem-cn-lite";
import Select from "../Select/Select";
const b = block("search-form");

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchText } = useAppSelector((state) => state.books);
  const { setSearchText, removeBooksData, setStartIndex } = booksSlice.actions;
  const dispatch = useAppDispatch();

  const handleSearchFormSubmit = () => {
    if (inputValue && inputValue !== searchText) {
      dispatch(removeBooksData());
      dispatch(setStartIndex(0));
      dispatch(setSearchText(inputValue));
    }
  };

  return (
    <section className={b()}>
      <div className={b("container")}>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchFormSubmit();
          }}
          className={b("form")}
        >
          <div className={b("icon")}></div>
          <input
            placeholder="Search books"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className={b("input")}
          ></input>
          <button
            type="button"
            onClick={handleSearchFormSubmit}
            className={b("button")}
          ></button>
        </form>
      </div>
      <div className={b("select-wrapper")}>
        <Select
          title="Categories"
          options={[
            "all",
            "art",
            "biography",
            "computers",
            "history",
            "medical",
            "poetry",
          ]}
        />
        <Select title="Sorting by" options={["relevance", "newest"]} />
      </div>
    </section>
  );
};

export default SearchForm;
