import { Route, Routes, HashRouter, Navigate } from 'react-router-dom'
import { useState } from "react";

import './App.css'
import type UserInfo from "./types/userInfo";
import { CurrentUserContext } from './contexts/UserContext';

import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ActivityPage from './pages/ActivityPage';


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
          <Route path="/" element={<ProtectedRoute Element={HomePage} userData={userData}/>} />
          <Route path="/:activityId" element={<ProtectedRoute Element={ActivityPage} userData={userData}/>} />
          <Route path="/login" element={<ProtectedRoute Element={LoginPage} userData={userData} postLogin={true}/>}/>
        </Routes>
      </HashRouter>
    </CurrentUserContext.Provider>
    </>
  )
}

export default App;
