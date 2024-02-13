import { useEffect } from "react";
import BooksCard from "../BooksCard/BooksCard";
import "./BooksCardList.scss";
import block from "bem-cn-lite";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { booksSlice } from "../../store/reducers/BooksSlice";
import { booksAPI } from "../../services/BooksService";
import { Oval } from "react-loader-spinner";
import { IBook } from "../../models/IBook";

const b = block("books-card-list");

const BooksCardList = () => {
  const {
    booksData,
    resultsCount,
    searchText,
    category,
    sortingBy,
    startIndex,
  } = useAppSelector((state) => state.books);
  const { setBooksData, setResultsCount, setStartIndex } = booksSlice.actions;
  const dispatch = useAppDispatch();
  const [getBooks, { isFetching }] = booksAPI.useLazyFetchAllBooksQuery();

  const queryOptions = {
    text: searchText,
    category: category === "all" ? "" : category,
    sortingBy: sortingBy,
    startIndex: startIndex,
  };

  useEffect(() => {
    if (searchText) {
      getBooks(queryOptions)
        .unwrap()
        .then((res) => {
          dispatch(setResultsCount(res.totalItems));
          res.items && dispatch(setBooksData(res.items));
        });
    }
  }, [searchText, category, sortingBy, startIndex]);

  const handleLoadMoreButtonClick = () => {
    dispatch(setStartIndex(startIndex + 30));
  };

  return (
    <main className={b()}>
      <span className={b("message")}>
        {searchText ? `Found ${resultsCount} results` : "Enter your request"}
      </span>
      <div className={b("container")}>
        {booksData &&
          booksData.map((book: IBook) => {
            return (
              <BooksCard
                title={book.volumeInfo.title || ""}
                category={
                  book.volumeInfo.categories
                    ? book.volumeInfo.categories[0]
                    : ""
                }
                author={
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : ""
                }
                img={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : ""
                }
                key={book.id + book.etag}
              />
            );
          })}
      </div>
      {isFetching && (
        <div className={b("loader")}>
          <Oval
            height={100}
            width={100}
            color="#26A1DB"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#B6DEF0"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      {searchText && resultsCount > booksData.length && !isFetching && (
        <button
          className={b("load-more-button")}
          onClick={handleLoadMoreButtonClick}
        >
          Load more
        </button>
      )}
    </main>
  );
};

export default BooksCardList;
