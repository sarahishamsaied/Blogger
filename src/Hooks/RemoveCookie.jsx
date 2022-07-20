import Cookies from "js-cookie";
const RemoveCookie = (cookieName,user) =>{
    Cookies.remove(cookieName);
};
export default RemoveCookie;