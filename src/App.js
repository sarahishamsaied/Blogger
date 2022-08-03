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
import Navbar from './Components/Navbar/Navbar';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Profile from './Components/UserProfile/Profile'; 
import { useEffect, useState } from 'react';
import GetCookie from './Hooks/GetCookie';
import FilteredBlogs from './Components/Blog Home Page/FilteredBlogs';
import Explore from './Components/Explore/Explore';
import {ReadingListContext} from './Context/ReadingListContext';
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const test = GetCookie("token")?true:false
  useEffect(()=>{
      const token = GetCookie("token")
      if(token)
      setIsLoggedIn(true);
      else
      setIsLoggedIn(false)
  },[])
  return (
    <AuthProvider>
      <ReadingListContext>
      <Navbar/>
      <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/signUp" element = {<SignUp/>}/>
      <Route path = "/signIn" element = {<SignIn/>}/>
      <Route path="/home" element={<ProtectedRoute isLoggedIn={test}><Home /></ProtectedRoute>}/>
      <Route path='/profile' element = {<ProtectedRoute isLoggedIn = {test}><UserProfile/></ProtectedRoute>}/>
      <Route path='/user/:username' element = {<ProtectedRoute isLoggedIn = {test}><Profile/></ProtectedRoute>}/>
      <Route path='/createPost' element = {<ProtectedRoute isLoggedIn = {test}><BlogForm/></ProtectedRoute>}/>
      <Route path='/explore' element = {<ProtectedRoute isLoggedIn = {test}><Profile/></ProtectedRoute>}/>
      <Route path='/blogDetails/:id' element = {<ProtectedRoute isLoggedIn = {test}><BlogDetails/></ProtectedRoute>}/>
      <Route path='/filter/:tags' element = {<ProtectedRoute isLoggedIn = {test}><FilteredBlogs/></ProtectedRoute>}/>
    </Routes>
    </ReadingListContext>
    </AuthProvider>
   
  );
}

export default App;
