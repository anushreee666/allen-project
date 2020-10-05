//import fetch_auth from "../../Api.js"
//import postTest from "../../api/authApi";
import axiosInstance from "../../api/axios";

export default function signIn(appNumber, password) {
	return (dispatch, getState) => {
		const data = {
			UserName: appNumber,
			Password: password,
			Devicetoken: "123123",
			Devicetype: "web",
		};

		axiosInstance
			.post("/oauth2/astoken", data)
			.then((response) => {
				console.log("response", response.data);
				if (response.data.data.jwt) {
					dispatch({
						type: "SIGNIN_SUCCESS",
						jwt: response.data.data.jwt,
						profile: response.data.data.profile,
					});
				} else {
					dispatch({ type: "SIGNIN_FAIL" });
				}
			})
			.catch((e) => {
				console.log("error", e);
				dispatch({ type: "SIGNIN_ERROR", e: e });
			});

		/*const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				UserName: appNumber,
				Password: password,
				Devicetoken: "",
				Devicetype: "",
			}),
		};

		fetch("http://ddcapi.allenbpms.in/oauth2/astoken", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.data.jwt)
					dispatch({
						type: "SIGNIN_SUCCESS",
						jwt: data.data.jwt,
						profile: data.data.profile,
					});
				else dispatch({ type: "SIGNIN_FAIL" });
			})
			.catch((e) => {
				dispatch({ type: "SIGNIN_ERROR", e: e });
			});*/
	};
}
