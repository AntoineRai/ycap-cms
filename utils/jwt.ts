import { CSR } from "@/config/CSR";

const jwt = require("jsonwebtoken");

function isJwtExpired(token: string): boolean {
    const decodedToken = decodeJwt(token);
    if (!decodedToken || !decodedToken.exp) {
        return true; 
    }
    const expirationTime = decodedToken.exp * 1000;
    const currentTime = Date.now();
    return currentTime > expirationTime;
}

function decodeJwt(token: string): any {
    return jwt.decode(token);
}

export function isExpired(accessToken: string | null, refreshToken: string | null): boolean {
    if (accessToken && isJwtExpired(accessToken)) {
        return false;
    }
    if (refreshToken && isJwtExpired(refreshToken)) {
        fetch(`${CSR}/user/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshToken}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
        });
        return false;
    }
    return true;
}