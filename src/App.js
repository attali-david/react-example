import Nav from "./components/Nav.tsx";
import Loading from "./components/Loading.tsx";
import ResultGrid from "./components/ResultGrid.tsx";
import { Context } from "./context/Provider.tsx";

function App() {
  return (
    <Context>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <main>
          <ResultGrid />
        </main>
      </div>
    </Context>
  );
}

export default App;
