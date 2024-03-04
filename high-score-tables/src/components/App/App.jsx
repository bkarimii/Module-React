// App.jsx
import React, { useState } from "react";
import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import SortScores from "../sortScores/SortScores";
import "./App.scss";
import Sorter from "../SorterCountryByName/SortCountryByName";

const sortedByName = scores.sort((a, b) => Sorter(a, b));
const App = () => {
  const [isAscending, setIsAscending] = useState(false);

  const toggleSorting = () => {
    setIsAscending((prevState) => !prevState);
  };

  const sortedScores = sortedByName.map(({ name, scores }) => ({
    name,
    scores: [...scores].sort((a, b) =>
      isAscending ? SortScores(a, b) : SortScores(b, a)
    ),
  }));

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">High Scores</h1>
        <button onClick={toggleSorting}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
      </header>
      {sortedScores.map(({ name, scores }, index) => (
        <HighScoreTable country={name} scores={scores} key={index} />
      ))}
    </div>
  );
};

export default App;
