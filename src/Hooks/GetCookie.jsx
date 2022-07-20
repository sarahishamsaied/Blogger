import Cookies from "js-cookie";
const GetCookie = (cookieName,user) =>{
   return Cookies.get(cookieName);
};
export default GetCookie;