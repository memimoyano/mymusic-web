export interface Playlist{
    id: number,
    name: string,
    songCount: number,
    ownerEmail: string
}

export interface PlaylistRequest{
    id: number,
    name: string,
}
