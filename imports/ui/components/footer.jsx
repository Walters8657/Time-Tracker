
import React from 'react';
import {NavLink} from "react-router-dom";
export default class Footer extends React.Component{
  render(){
    return (
      <footer className="redBG">
        <ul>
          <li><NavLink to="/"><img src="images/Home.png" alt="Home Icon"/></NavLink></li>
          <li><NavLink to="/TimeList"><img src="images/List.png" alt="List Icon"/></NavLink></li>
          <li><NavLink to="/Settings"><img src="images/Settings.png" alt="Settings Icon"/></NavLink></li>
        </ul>
      </footer>
    );
  }
}
