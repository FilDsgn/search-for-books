import "./App.scss";
import block from "bem-cn-lite";
import Header from "../Header/Header";
import BooksCardList from "../BooksCardList/BooksCardList";

import Footer from "../Footer/Footer";

const b = block("app");

function App() {
  return (
    <div className={b()}>
      <Header />
      <BooksCardList />
      <Footer />
    </div>
  );
}

export default App;
