import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([])

  const search = charArr => {
    updateData(charArr)

};
  useEffect(() => {
    Axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const characterInfo = response.data.results;
      console.log("Rick and Morty's Page", characterInfo);
      setCharacters(characterInfo);
      updateData(characterInfo);
    })
    .catch(error => {
      console.log("You are getting an error", error);

    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link to={"/"}>
        Home
      </Link>
      <SearchForm search={search} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}
    </section>
  );
}
