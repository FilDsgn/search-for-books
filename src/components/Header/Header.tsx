import SearchForm from "../SearchForm/SearchForm";
import "./Header.scss";
import block from "bem-cn-lite";

const b = block("header");

const Header = () => {
  return (
    <header className={b()}>
      <div className={b("container")}>
        <h1 className={b("title")}>SEARCH FOR BOOKS</h1>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
