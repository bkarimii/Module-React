import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import "./App.scss";

// scores.sort((a, b) => a.name.localCompare(b.name));
function sorter(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  if (a.name == b.name) {
    return 0;
  }
}
scores.sort(sorter);
const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">High Scores</h1>
    </header>
    {scores.map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores} key={index} />
    ))}
  </div>
);

export default App;
