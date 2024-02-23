import { Route, Routes, HashRouter, Navigate } from 'react-router-dom'
import { useState } from "react";

import './App.css'
import type UserInfo from "./types/userInfo";
import { CurrentUserContext } from './contexts/UserContext';

import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ActivityPage from './pages/ActivityPage';
import RecordPage from './pages/RecordPage';


const App = () => {


  const [userData, setUserData] = useState<UserInfo | null>(
    JSON.parse(sessionStorage.getItem("userData") || "null")
  );

  interface ProtectedRouteProps {
    Element: React.FC;
    userData: UserInfo | null;
    isLogin?: boolean;
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({Element, userData, isLogin }) => {
    if (userData !== null) {
      if (isLogin !== undefined || isLogin == true) {
        return <Navigate to="/" replace />;
      }
      return <Element/>;
    }
    return <Navigate to="/login" replace />;
  };

  return (
    <>
      <CurrentUserContext.Provider value={{userData, setUserData}}>
        <HashRouter>
          <Routes>
            <Route path="/record" element={<ProtectedRoute Element={RecordPage} userData={userData}/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<ProtectedRoute Element={HomePage} userData={userData}/>} />
            <Route path="/:activityId" element={<ProtectedRoute Element={ActivityPage} userData={userData}/>}/>
          </Routes>
        </HashRouter>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App;
