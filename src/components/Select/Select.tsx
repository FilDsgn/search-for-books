import { FC, useEffect, useState } from "react";
import "./Select.scss";

import block from "bem-cn-lite";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { booksSlice } from "../../store/reducers/BooksSlice";
const b = block("select");

interface SelectProps {
  title: string;
  options: string[];
}

const Select: FC<SelectProps> = ({ title, options }) => {
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

  return (
    <section className={b()}>
      <h3 className={b("title")}>{title}</h3>
      <div className={b("container")}>
        <select
          className={b("form")}
          onChange={(e) => setValue(e.target.value)}
          defaultValue={value}
        >
          {options.map((option: string) => {
            return (
              <option value={option} className={b("form-option")} key={option}>
                {option.replace(option[0], option[0].toUpperCase())}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Select;
