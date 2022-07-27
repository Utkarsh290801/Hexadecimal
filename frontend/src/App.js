import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import SignUp from './Components/SignUp';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
