import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import {Routes,Route} from 'react-router-dom'
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import Home from './Components/Home/Home';
import BlogForm from './Components/Blog/BlogForm';
import AuthProvider from './Context/AuthProvider';
import UserProfile from './Components/UserProfile/UserProfile';
import BlogDetails from './Components/Blog/BlogDetails';
function App() {
  return (
    <AuthProvider>
 <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/signUp" element = {<SignUp/>}/>
      <Route path = "/signIn" element = {<SignIn/>}/>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/createPost" element = {<BlogForm/>}/>
      <Route path = "/profile" element = {<UserProfile/>}/>
      <Route path = "/blogDetails/:id" element = {<BlogDetails/>}/>
    </Routes>
    </AuthProvider>
   
  );
}

export default App;
