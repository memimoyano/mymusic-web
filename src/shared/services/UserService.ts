import axios from "axios";
import CONSTANTS from "../helpers/Constants";
import { User } from "../interfaces/User";

export function createUser(newUser: User) {
    const headers = {
        'Content-Type': 'application/json',
    }
    return axios.post(`${CONSTANTS.BASE_URL}/user-service/users`, newUser, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}
