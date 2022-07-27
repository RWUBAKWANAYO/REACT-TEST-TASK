import "./App.scss"
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Header />
      <Statistics/>
      <Content/>
    </div>
  );
}

export default App;
