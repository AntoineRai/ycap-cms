import jwt, {JwtPayload} from 'jsonwebtoken';

export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
}

export const getMailFromToken = (token: any): string => {
    const decodedToken = jwt.decode(token) as JwtPayload;
    return decodedToken?.mail || '';
}