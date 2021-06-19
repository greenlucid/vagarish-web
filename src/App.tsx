import { Switch, Route } from "react-router-dom"
import Home from "./pages"
import Search from "./pages/Search"

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  )
}

export default App
