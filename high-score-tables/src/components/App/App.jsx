import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import "./App.scss";
import Sorter from "../SorterCountryByName/SortCountryByName";
import ButtonToggleScores from "../ButtonToggleScores/ButtonToggleScore";

scores.sort(Sorter);
const App = () => (
  <div className="app">
    <header className="app__header">
      <ButtonToggleScores />
      <h1 className="app__heading">High Scores</h1>
    </header>
    {scores.map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores} key={index} />
    ))}
  </div>
);

export default App;
