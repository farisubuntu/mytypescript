import "./App.css";
import {
  Types,
  Functions,
  AdvancedTypes,
  TypeNarrowing,
  UnionTypes,
  ComplexTypes,
} from "./components";

function App() {
  return (
    <div className="App">
      <Types />
      <Functions />
      <ComplexTypes />
      <UnionTypes />
      <TypeNarrowing />
      <AdvancedTypes />
    </div>
  );
}

export default App;
