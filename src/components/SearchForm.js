import React, { useState } from "react";

function SearchForm(props) {
  // const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filtered = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(filtered);
    console.log(filtered);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></input>
        <button>Submit</button>
      </form>
    </section>
  );
}
export default SearchForm;