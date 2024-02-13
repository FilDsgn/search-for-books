import "./Footer.scss";
import block from "bem-cn-lite";

const b = block("footer");

const Footer = () => {
  return (
    <footer className={b()}>
      <div className={b("container")}>
        <h2 className={b("title")}>SEARCH FOR BOOKS</h2>
        <p className={b("copyrigth")}>&copy;Created by Alexandr Filimonov</p>
      </div>
    </footer>
  );
};

export default Footer;
