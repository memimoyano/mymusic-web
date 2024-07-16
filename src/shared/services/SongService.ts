import axios from "axios";
import CONSTANTS from "../helpers/Constants";

export function getAllSongs() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/songs/`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getLastFiveSongs() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/songs/lastfive`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getSearchSongs(keyword: string) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/songs/search`, {headers: headers, withCredentials: true, params: { keyword }})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}


export function getAllSongsByPlaylistId(playlistId: number) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/songs/${playlistId}`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}