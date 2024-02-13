import { FC, useEffect, useState } from "react";
import "./Select.scss";

import block from "bem-cn-lite";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { booksSlice } from "../../store/reducers/BooksSlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SelectProps } from "./Select.types";

const b = block("select");

const SelectForm: FC<SelectProps> = ({ title, options }) => {
  const { setCategory, setSortingBy, removeBooksData, setStartIndex } =
    booksSlice.actions;
  const { category, sortingBy } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const initialValue = title === "Categories" ? category : sortingBy;

  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    dispatch(removeBooksData());
    dispatch(setStartIndex(0));
    title === "Categories"
      ? dispatch(setCategory(value))
      : dispatch(setSortingBy(value));
  }, [value]);

  const animatedComponents = makeAnimated();

  return (
    <section className={b()}>
      <h3 className={b("title")}>{title}</h3>
      <Select
        options={options}
        isSearchable={false}
        onChange={(e: any) => setValue(e.value)}
        defaultValue={options[0]}
        classNamePrefix={b("custom-select")}
        components={animatedComponents}
      />
    </section>
  );
};

export default SelectForm;
