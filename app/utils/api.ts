import { fetchDataForAllYears } from "./github";

const API_URL = "/api/github";

export const getData = () => {
	return fetch(API_URL).then((res) => res.json());
};
