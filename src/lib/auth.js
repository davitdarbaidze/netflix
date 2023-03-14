import Router from "next/router";
import Cookies from "js-cookie";


export const setToken = (data) =>{

    if(typeof window === "undefined") return;


    Cookies.set("id", data.user.id)
    Cookies.set("username", data.user.username)
    Cookies.set("jwt", data.jwt)


    if(Cookies.get('username')){
        Router.reload('/')
    }
}

export const unsetToken = () =>{
    if(typeof window === "undefined") return;

    Cookies.remove("id")
    Cookies.remove("username")
    Cookies.remove("jwt")

    
    // Router.push('/')
    Router.reload('/')
    
}


export const getUserFromLocalCookie = () => {
    return Cookies.get("username")
}

export const getIdFromLocalCookie = () => {
    return Cookies.get("id")
}

export const getTokenFromLocalCookie = () => {
    return Cookies.get("jwt")
}

export const getTokenFromServerCookie = (req) => {
    if(!req.headers.cookie) return undefined;

    const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));

    if(!jwtCookie) return undefined;

    return jwtCookie.split("=")[1];
}