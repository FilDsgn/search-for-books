import { FC } from "react";
import "./BooksCard.scss";
import block from "bem-cn-lite";
import { BooksCardProps } from "./BooksCard.types";

const b = block("books-card");

const BooksCard: FC<BooksCardProps> = ({ title, category, author, img }) => {
  return (
    <article className={b()}>
      <div className={b("container")}>
        <img src={img} alt={title} className={b("image")}></img>
        <div className={b("info-wrapper")}>
          <p className={b("category")}>{category ? category : ""}</p>
          <h2 className={b("title")}>
            {title.length < 45 ? title : title.substring(0, 45) + "..."}
          </h2>
          <p className={b("author")}>{author ? author : ""}</p>
        </div>
      </div>
    </article>
  );
};

export default BooksCard;
