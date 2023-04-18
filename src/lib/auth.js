import Router from "next/router";
import Cookies from "js-cookie";


export const setToken = (data,reCheck, time) =>{

    if(typeof window === "undefined") return;


    Cookies.set("id", data.user.id)
    Cookies.set("email", data.user.email)
    Cookies.set("username", data.user.username)
    Cookies.set("jwt", data.jwt)
    const now = new Date(); // Current date and time
    Cookies.set('time_now', now.toUTCString())
    


    if(Cookies.get('username')){
        if(reCheck){
            // Router.reload()
        }else{
            Router.push('/')
        }
    }
    return true
}

export const unsetToken = () =>{
    if(typeof window === "undefined") return;

    Cookies.remove("id")
    Cookies.remove("email")
    Cookies.remove("username")
    Cookies.remove("jwt")
    Cookies.remove('time_now')
    Cookies.remove('now')

    
    // Router.push('/')
    Router.reload('/')
    
}


export const getUserFromLocalCookie = () => {
    return Cookies.get("username")
}

export const getIdFromLocalCookie = () => {
    return Cookies.get("id")
}

export const getEmailFromLocalCookie = () => {
    return Cookies.get("email")
}

export const getTokenFromLocalCookie = () => {
    return Cookies.get("jwt")
}

export const getTimeFromLocalCookie = () => {
    return Cookies.get("time_now")
}

export const getTokenFromServerCookie = (req) => {
    if(!req.headers.cookie) return undefined;

    const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));

    if(!jwtCookie) return undefined;

    return jwtCookie.split("=")[1];
}