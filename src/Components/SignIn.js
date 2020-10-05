import React from "react";
import signIn from "../Store/Actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appNumber: null,
			password: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.appNumber, this.state.password);
		/*postData(this.state.appNumber, this.state.password);*/
		this.props.signIn(this.state.appNumber, this.state.password);
	}
	render() {
		if (this.props.loggedIn) return <Redirect to="../"></Redirect>;
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign In</h5>
					<div className="input-field">
						<label htmlFor="text"> Application Number</label>
						<input
							type="text"
							id="appNumber"
							onChange={this.handleChange}
						></input>
					</div>
					<div className="input-field">
						<label htmlFor="password"> Password</label>
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
						></input>
					</div>
					<div className="input-field">
						<button className=" pink lighten-1 ">Sign In</button>
					</div>
				</form>
				{this.props.authError && <h6> {this.props.authError} </h6>}
			</div>
		);
	}
}
function mapStateToProps(state) {
	//console.log(state);
	return { loggedIn: state.auth.loggedIn, authError: state.auth.authError };
}

function mapDispatchToProps(dispatch) {
	return {
		signIn: (appNumber, password) => dispatch(signIn(appNumber, password)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
