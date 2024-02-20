import { Route, Routes, HashRouter, Navigate } from 'react-router-dom'
import { useState } from "react";

import type UserInfo from "./types/userInfo";
import Home from "./pages/home";
import Login from './pages/login';
import './App.css'
import { CurrentUserContext } from './contexts/UserContext';


const App = () => {


  const [userData, setUserData] = useState<UserInfo | null>(
    JSON.parse(sessionStorage.getItem("userData") || "null")
  );

  interface ProtectedRouteProps {
    Element: React.FC;
    userData: UserInfo | null;
    isAdmin?: boolean;
    postLogin?: boolean;
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({Element, userData, isAdmin, postLogin }) => {
    if (postLogin !== undefined && postLogin === true) {
      if (userData !== null) {
        return <Navigate to="/" replace />;
      }
      return <Element/>;
    } else {
      const isAdminUser = isAdmin || false;
      if (userData === null || (isAdminUser && userData.role !== "admin")) {
        return <Navigate to="/login" replace />;
      }
      return <Element/>;
    }
  };

  return (
    <>
    <CurrentUserContext.Provider value={{userData, setUserData}}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute Element={Home} userData={userData}/>} />
          <Route path="/login" element={<ProtectedRoute Element={Login} userData={userData} postLogin={true}/>}/>
        </Routes>
      </HashRouter>
    </CurrentUserContext.Provider>
    </>
  )
}

export default App;
