import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css';
function App() {
  return (
    <UserProvider> 
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" component={Login}>

            </Route>
            <Route path="/signup" component={Signup}>
              
              </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
