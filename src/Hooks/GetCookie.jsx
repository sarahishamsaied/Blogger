import Cookies from "js-cookie";
const GetCookie = (cookieName,user) =>{
   try{
      return Cookies.get(cookieName);

   }
   catch(e){
      console.log(e)
      return ""
   }
};
export default GetCookie;