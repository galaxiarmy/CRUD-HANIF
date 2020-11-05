import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import JumbrotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import CreateUserContainer from './containers/CreateUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import HomeContainer from './containers/HomeContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbrotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />

          <Route path="/create" exact component={CreateUserContainer} />
           
          <Route path="/detail/:id" exact component={DetailUserContainer} />
            
          <Route path="/edit/:id" exact component={EditUserContainer} />
           

        </BrowserRouter>


      </div>
    )
  }
}
