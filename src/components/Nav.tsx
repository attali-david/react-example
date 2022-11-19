import React from "react";
import useSearch from "../hooks/useSearch.tsx";

const Nav = () => {
  const { query, setQuery } = useSearch();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Dogs!</h1>
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </nav>
  );
};

export default Nav;
