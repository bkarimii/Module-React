import React from "react";
import PlayerScore from "@/components/PlayerScore/PlayerScore.jsx";
import "./HighScoreTable.scss";
import SortScores from "../sortScores/SortScores";
import ButtonToggleScores from "../ButtonToggleScores/ButtonToggleScore";
import { useState } from "react";

// https://react.dev/learn/rendering-lists

// this is a start for level 2 chanlenge
const HighScoreTable = ({ country, scores = [] }) => {
  //let sortedScore = scores.sort((a, b) => SortScores(b, a));
  const [isAscending, setIsAscending] = useState(false);

  const ToggleButton = () => {
    setIsAscending((isPrev) => !isPrev);
  };

  const sortScoresConditionally = scores.sort((a, b) =>
    isAscending ? SortScores(a, b) : SortScores(b, a)
  );
  return (
    <>
      <ButtonToggleScores onClick={ToggleButton} />
      <table className="scores">
        <caption>{country}</caption>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortScoresConditionally.map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HighScoreTable;
