function SearchBar() {
  return (
    <>
      <div className="searchBarContainer">
        <input className="rounded-full w-40 h-10 searchBar focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 focus:w-60" type="text" placeholder="Søg" />
      </div>
    </>
  );
}

export default SearchBar;
