import axios from "axios";
import CONSTANTS from "../helpers/Constants";

export function getAllSongs() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/mymusic/songs/`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getLastFiveSongs() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/mymusic/songs/lastfive`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getSearchSongs(keyword: string) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/mymusic/songs/search`, {headers: headers, withCredentials: true, params: { keyword }})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}


export function getAllSongsByPlaylistId(playlistId: number) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/mymusic/playlists/${playlistId}/songs`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getSearchSongsByPlaylistId(playlistId: number,keyword: string) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/mymusic/songs/search/playlist/${playlistId}`, {headers: headers, withCredentials: true, params: { keyword }})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}
