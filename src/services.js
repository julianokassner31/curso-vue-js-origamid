import axios from "axios";

const axiosIntance = axios.create({
    baseURL: "http://localhost:3000"
});

export const api = {
    get(uri) {
        return axiosIntance.get(uri);
    }
}