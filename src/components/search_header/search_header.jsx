import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    // 이 안에서 검색을 해주는 것이 아니라 , 검색하는 것을 props로 받아와야 함!(onSearch)
    // 검색하는 이벤트가 발생되면 내가 전달 해준 onSearch라는 콜백 함수를 불러
    onSearch(value);
    inputRef.current.value = "";
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="./images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
