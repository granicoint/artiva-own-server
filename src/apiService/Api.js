import axios from "axios";

const instance = axios.create({
    // baseURL: `https://artiva-backend.vercel.app/api`,
    baseURL: `http://localhost:5055/api`,
    timeout: 50000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default instance;
