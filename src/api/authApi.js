import axios from "axios";
import axiosInstance from "./axios";

const postData = (userName, password) => {
	const data = {
		UserName: userName,
		Password: password,
		Devicetoken: "123123",
		Devicetype: "web",
	};

	axiosInstance
		.post("/oauth2/astoken", data)
		.then((response) => {
			console.log("response", response.data);
			/*change logged state globally */
		})
		.catch((e) => {
			console.log("error", e);
			return "error" + e;
		});
};
export default postData;
