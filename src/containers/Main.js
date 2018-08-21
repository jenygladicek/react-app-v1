import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from "react-router-dom";

import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import { ButtonComponent } from "../components/ButtonComponent";
import LandingPage from "./LandingPage";

class Main extends Component {
	render(){	
      const loggedin = false;

      if(!loggedin) {
        return (
            <div>
                <LandingPage />
            </div>
        );
      } else {
        return (
          <div>

          </div>
        )
      }
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
