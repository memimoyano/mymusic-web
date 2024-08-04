import axios from "axios";
import CONSTANTS from "../helpers/Constants";
import { TOKEN_STORAGE_KEY } from "../helpers/AuthContext";

export async function login(email: string, password: string) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const data = { email, password }
    const res = await axios.post(`${CONSTANTS.BASE_URL}/user-service/login`, data, {headers: headers, withCredentials: true})
    if (res.status !== 200) {
        throw new Error("Auth error");
    }

    const token = res.data.token;
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function logout() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/user-service/logout`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}