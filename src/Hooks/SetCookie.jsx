import Cookies from "js-cookie";
const SetCookie = (cookieName,user) =>{
    Cookies.set(cookieName,user,{
        expires:10, //10days
        secure:true
    })
};
export default SetCookie;