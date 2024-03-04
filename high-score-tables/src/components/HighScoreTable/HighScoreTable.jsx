// HighScoreTable.jsx
import React from "react";
import PlayerScore from "@/components/PlayerScore/PlayerScore.jsx";
import "./HighScoreTable.scss";

const HighScoreTable = ({ country, scores }) => {
  return (
    <table className="scores">
      <caption>{country}</caption>
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score, index) => (
          <PlayerScore key={index} name={score.n} score={score.s} />
        ))}
      </tbody>
    </table>
  );
};

export default HighScoreTable;
