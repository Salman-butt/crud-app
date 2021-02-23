import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Service } from "./Service";
import { AddUser } from "./CRUD/AddUser";
import {EditUser} from "./CRUD/EditUser";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//  import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
  import { Navbar } from "./Navbar";
  
  // import { NotFound } from "../src/pages_/NotFound";


export const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/service" component={Service}/>
      <Route exact path ="/contact" component={Contact}/>
      <Route exact path ="/crud/adduser" component={AddUser}/>
      <Route exact path ="/crud/edituser" component={EditUser}/>
            
      <Redirect to="/" />
    </Switch>
    </>
  );
};