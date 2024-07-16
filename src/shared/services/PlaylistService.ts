import axios from "axios"
import CONSTANTS from "../helpers/Constants";
import { PlaylistRequest } from "../interfaces/Playlist";
import { getToken } from "../helpers/AuthContext";

export function getAllPlaylists() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/playlists`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getLastEightPlaylists() {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.get(`${CONSTANTS.BASE_URL}/playlists/lasteight`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getAllMyPlaylists() {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.get(`${CONSTANTS.BASE_URL}/playlists/owner`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}


export function getMyLastEightPlaylists() {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.get(`${CONSTANTS.BASE_URL}/playlists/mylasteight`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function getPlaylistById(playlistId: number) {
    const headers = {
        'Content-Type': 'application/json',
    }
    return axios.get(`${CONSTANTS.BASE_URL}/playlists/${playlistId}`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}


export function createPlaylist(playlist: PlaylistRequest) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.post(`${CONSTANTS.BASE_URL}/playlists`, playlist, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

