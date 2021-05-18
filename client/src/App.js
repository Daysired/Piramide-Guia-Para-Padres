import { Route} from "react-router-dom";
import Home from "./Screens/Home"
import Donate from "./Screens/Donate"
import AboutUs from "./Screens/AboutUs"
import ContactUs from "./Screens/ContactUs"
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

      <Route path="/contacto">
        <ContactUs />
      </Route>

    </div>
  );
}

export default App;
