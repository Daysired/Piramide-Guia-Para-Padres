import { Route} from "react-router-dom";
import Home from "./Screens/Home"
import Donate from "./Screens/Donate"
import AboutUs from "./Screens/AboutUs"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/nosotros">
        <AboutUs />
      </Route>

      <Route path="/donar">
        <Donate />
      </Route>

    </div>
  );
}

export default App;
