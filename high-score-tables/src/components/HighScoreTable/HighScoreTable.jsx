import PlayerScore from "@/components/PlayerScore/PlayerScore.jsx";
import "./HighScoreTable.scss";
import SortScoresDecsending from "../SortScoresDesc/SortScoresDescending";
// https://react.dev/learn/rendering-lists

// this is a start for level 2 chanlenge
const HighScoreTable = ({ country, scores = [] }) => {
  scores.sort(SortScoresDecsending);
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
