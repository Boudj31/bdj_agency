import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <NavLink to="/" exact className="hover" activeClassName="nav-active">
                        <li>Accueil</li>
                    </NavLink>

                   <li className="nav-portfolio">portfolio
                     <ul className="nav-projects">
                         <NavLink to="/project-1" className="hover" activeClassName="nav-active">
                             <li>Projet 1</li>
                         </NavLink>
                         <NavLink to="/project-2" className="hover" activeClassName="nav-active">
                             <li>Projet 2</li>
                         </NavLink>
                         <NavLink to="/project-3" className="hover" activeClassName="nav-active">
                             <li>Projet 3</li>
                         </NavLink>
                         <NavLink to="/project-1" className="hover" activeClassName="nav-active">
                             <li>Projet 4</li>
                         </NavLink>
                     </ul>
                   </li>
                   <NavLink to="/about" exact className="hover" activeClassName="nav-active">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        )
    }
}
