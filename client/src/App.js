import { Route} from "react-router-dom";
import Home from "./Screens/Home"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
