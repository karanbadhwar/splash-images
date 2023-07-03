import React from "react";
import { useGlobalContext } from "../Context/Context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="luxury"
          id=""
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
