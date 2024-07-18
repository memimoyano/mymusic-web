import axios from "axios"
import CONSTANTS from "../helpers/Constants";
import { PlaylistRequest } from "../interfaces/Playlist";
import { getToken } from "../helpers/AuthContext";
import { SongRequest } from "../interfaces/Song";

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

export function updatePlaylist(playlistId: number,playlist: PlaylistRequest) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.put(`${CONSTANTS.BASE_URL}/playlists/${playlistId}`, playlist, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function deletePlaylist(playlistId: number) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.delete(`${CONSTANTS.BASE_URL}/playlists/${playlistId}`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function addSongToPlaylist(playlistId: number, songRequest: SongRequest) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.post(`${CONSTANTS.BASE_URL}/playlists/${playlistId}/song`, songRequest, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}

export function deleteSongFromPlaylist(playlistId: number,songId: number) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return axios.delete(`${CONSTANTS.BASE_URL}/playlists/${playlistId}/song/${songId}`, {headers: headers, withCredentials: true})
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
}
