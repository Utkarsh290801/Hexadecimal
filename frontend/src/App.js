import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import SignUp from './Components/SignUp';
import IssueAdd from './Components/IssueAdd';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import IssueBrowser from './Components/IssueBrowser';



function App() {
  return (
    <BrowserRouter><Header/>
    <Routes>
    <Route element={<Navigate to="/home" />} path="/" />
      <Route element={<SignUp/>}path="/signup"/>
      <Route element={<Login/>}path="/login"/>
      <Route element={<IssueAdd/>}path="/issueadd"/>
      <Route element={<Home/>}path="/home"/>
      <Route element={<IssueBrowser/>}path="/issuebrowser"/>
      
 
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
