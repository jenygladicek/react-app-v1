import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../components/buttons/Button";
import Logo from "./../../components/Logo";
import NavMenu from "./../../components/nav/NavMenu";
import NavItem from "./../../components/nav/NavItem";

class LandingPage extends Component {
    enrollMerchant = () => {
        console.log("enroll");
    }

    loginMerchant = () => {
        console.log("login");
    }

    loginAdmin = () => {
        console.log("login admin");
    }

    render() {
      return (
          <div>
			<nav class="navbar navbar-inverse">
			<div class="container-fluid">
              <Logo/>
              <NavMenu>
                  <NavItem path="/overview">OVERVIEW</NavItem>
                  <NavItem path="/howitworks">HOW IT WORKS</NavItem>
                  <NavItem path="/whyfundadvance">WHY FUNDS ADVANCE</NavItem>
              </NavMenu>
			  <ul class="nav navbar-nav navbar-right">
				<Button onClick={this.enrollMerchant} buttonName="Enroll"/>
			  </ul>
			  </div>
			  </nav>
			  <div class="container">
				  <div class="jumbotron">
					<h1>Some Image</h1> 
					<p>Need Fast Access to your Funds? <br/> You 've come to the right place</p> 
				  </div>
				  <div class='row'>
				  		<div class='col-md-5 col-md-offset-1'>
					    <form>
					      <label for="head1">Have an account?</label>
					      <div class="form-group">
						     <Button onClick={this.loginMerchant} buttonName="Merchant Login" />
					       </div>
					      <div class="form-group">
						      <Button onClick={this.loginAdmin} buttonName="Non-Merchant Login" />
					      </div>
					    </form>
						</div>
						<div class='col-md-5 col-md-offset-1'>
						<form>
						<label for="head2">Create an account?</label>
						  <div class="form-group">
							<label for="head3">Enroll in Advanced Same Day Funding by completing the enrollement application</label>
						  </div>
						  <div class="form-group">
							<Button onClick={this.enrollMerchant} buttonName="Enroll"/>
						  </div>
						</form>
						</div>
				</div>
          </div>
		  </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
