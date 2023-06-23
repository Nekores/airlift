import "./App.css";
import { Navbar, Slide1 } from "../containers/";
import { Separater } from "../components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Separater />
      <Slide1 />
    </div>
  );
}

export default App;
