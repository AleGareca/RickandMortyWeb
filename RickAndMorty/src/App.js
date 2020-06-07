import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Home from './component/Home'
import Buscador from './component/Buscador'
import Info from './component/Info'

export default class App extends React.Component {
   render() {
    return (
      <BrowserRouter>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/serch" component={Buscador} />
            <Route exact path="/:id" component={Info} />
          </Switch>
        </Route>
      </BrowserRouter>);
  }
}



