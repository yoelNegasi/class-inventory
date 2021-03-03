import Jacket from "./Jacket";
import Pants from "./Pants";
import Suits from "./Suits";
import "./App.css";
import Ties from "./Ties";

function App() {
  return (
    <div>
      <h1> Inventory</h1>
      <div className="overall">
        <Jacket startingCount={88} />
        <Pants startingCount={12} />
        <Suits start={22} />
        <Ties start={22} />
      </div>
    </div>
  );
}

export default App;
