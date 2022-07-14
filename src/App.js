import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import {Routes,Route} from 'react-router-dom'
import SignUp from './Components/Auth/SignUp';
function App() {
  return (
    <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/signUp" element = {<SignUp/>}/>
    </Routes>
  );
}

export default App;
