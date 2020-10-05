const initState = {
	authError: null,
	loggedIn: false,
	jwt: null,
	profile: null,
};
export default function authReducer(state = initState, action) {
	switch (action.type) {
		case "SIGNIN_SUCCESS":
			console.log("Sign In success");
			return {
				...state,
				loggedIn: true,
				authError: null,
				jwt: action.jwt,
				profile: action.profile,
			};
		case "SIGNIN_FAIL":
			console.log("Sign in Fail");
			return {
				...state,
				loggedIn: false,
				authError: "application number or password incorrect",
				jwt: null,
				profile: null,
			};
		case "SIGNIN_ERROR":
			console.log("error", action.e);
			return {
				...state,
				loggedIn: false,
				authError: "login fail error encountered",
				jwt: null,
				profile: null,
			};

		default:
			return state;
	}
}
