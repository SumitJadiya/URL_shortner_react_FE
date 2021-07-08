import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Decode from './components/DecodeURL/Decode'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:code" component={Decode} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
