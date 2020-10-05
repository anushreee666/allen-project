import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
	render() {
		if (!this.props.loggedIn) return <div className="container">HOME</div>;
		console.log("profile", this.props.profile[0]);
		return (
			<div className="container">
				HOME
				<h5> Welcome {this.props.profile[0].EnrolmentNo}</h5>
			</div>
		);
	}
}
function mapStateToProps(state) {
	//console.log(state);
	return { loggedIn: state.auth.loggedIn, profile: state.auth.profile };
}

export default connect(mapStateToProps)(Home);
