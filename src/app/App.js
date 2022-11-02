import React, { Fragment } from "react";
import {Navbar, Card} from "./components/Navbar"
import "./styles/App.css"

const SideMenu = () =>{
  const links = ["Lenterne", "", "Montre", "Carte",]
  return(
  <div className="col-sm-2 sidebar">
    <ul>
      {links.map (link => {
        return (<li>{link}</li>)
      })}
    </ul>
          </div>
        );
};

const App = () => {
  return(
    <Fragment>
      < Navbar />
      <div className="containre">
        <div className="row">
          <SideMenu />
          <div className="col-sm">
            <div className="row">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
