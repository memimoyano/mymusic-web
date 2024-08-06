import React, { createContext, useEffect, useState } from "react";

export const TOKEN_STORAGE_KEY = "token";

export function getToken(): string | null {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
}

function parseJwt (token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
        atob(base64)
        .split('')
        .map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
}

function getAuthUserId(): string | null {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!token) {
        return null;
    }
    const payload = parseJwt(token);

    const expiration = new Date(payload.exp * 1000)
    if (new Date() > expiration) {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        return null;
    }

    return payload.sub;
}

export const AuthContext = createContext("");

export const AuthProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [authId, setAuthId] = useState<string>("");

    useEffect(() => {
        const userId = getAuthUserId();
        setAuthId(userId || "");
    }, []);

  return <AuthContext.Provider value={authId} {...props} />;
}
