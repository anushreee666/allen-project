import React from "react";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import "./App.css";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/SignIn" component={SignIn}></Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
