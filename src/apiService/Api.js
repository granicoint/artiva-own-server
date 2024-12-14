import axios from "axios";
import { interceptorsRequest, interceptorsRequestError, interceptorsResponse, interceptorsResponseError } from "./interceptors.js";

let API = axios.create({
    baseURL: `http://localhost:5055/api`,
    responseType: "json",
});

API.defaults.headers.post["content-type"] = "application/json";
API.defaults.headers.get["Accept"] = "application/json";

API.interceptors.request.use(
    (request) => {
        return interceptorsRequest(request);
    },
    (error) => {
        return interceptorsRequestError(error);
    }
);

API.interceptors.response.use(
    (response) => {
        return interceptorsResponse(response);
    },
    (error) => {
        return interceptorsResponseError(error);
    }
);

export default API;
