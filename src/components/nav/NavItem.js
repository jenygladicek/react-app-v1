import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavItem extends Component {

    render() {
      return (
          <li><a href="#">
            <Link to={this.props.path}>{this.props.children}</Link></a>
          </li>
      );
    }
}


export default NavItem;
