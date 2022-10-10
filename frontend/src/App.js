import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import SignUp from './Components/SignUp';
import IssueAdd from './Components/IssueAdd';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import IssueBrowser from './Components/IssueBrowser';

import Header1 from './Components/Header1';
import Try from './Components/Try';
import Login1 from './Components/Login1';
import Header2 from './Components/Header2';
// import Sidebar from './Components/Sidebar';

import NotFound from './Components/NotFound';
import Error1 from './Components/Error1';
import Login5 from './Components/Login5';
import Login4 from './Components/Login4';
import Create from './Components/Create';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Header3 from './Components/Header3';
import Main from './Components/Main';
import MainHeader from './Components/MainHeader';
import UserHeader from './Components/UserHeader';
import UserSdebar from './Components/UserSdebar';
import GoogleAuth from './Components/img/GoogleAuth';
import Pricing1 from './Components/Pricing1';
import ManageUser from './Components/ManageUser';
import ViewUser from './Components/ViewUser';
import WebBuilder from './Components/WebBuilder';




function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      
    <Route element={<Navigate to="/home" />} path="/" />
      <Route element={<SignUp/>}path="/signup"/>
      <Route element={<Header/>}path="/header"/>

      <Route element={<Sidebar/>}path="/sidebar"/>
      <Route element={<Create/>}path="/create"/>
      <Route element={<Login5/>}path="/login5"/>
      <Route element={<Login4/>}path="/login4"/>
      <Route element={<Error1/>}path="/error"/>
      <Route element={<NotFound/>}path="/notfound"/>
      <Route element={<Login/>}path="/login"/>
      <Route element={<IssueAdd/>}path="/issueadd"/>
      <Route element={<Home/>}path="/home"/>
      <Route element={<IssueBrowser/>}path="/issuebrowser"/>
      <Route element={<Header3/>}path="/header3"/>
      <Route element={<Header1/>}path="/header1"/>
      <Route element={<Try/>}path="/try"/>
      <Route element={<ViewUser/>}path="/admin/:id"/>
      <Route element={<Login1/>}path="/login1"/>
      <Route element={<Header2/>}path="/header2"/>
      <Route element={<Sidebar/>}path="/sidebar"/>
      <Route element={<UserHeader/>}path="/userheader"/>
      <Route element={<UserSdebar/>}path="/usersidebar"/>
      <Route element={<GoogleAuth/>}path="/google"/>
      <Route element={<Pricing1/>}path="/price"/>
      <Route element={<ManageUser/>}path="/user"/>
      <Route element={<WebBuilder/>}path="/web"/>
      
      <Route element={<Dashboard/>}path="/dashboard"/>
      <Route element={<Main/>}path="/main"/>
      <Route element={<MainHeader/>}path="/mainheader"/>
      
      
 
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
