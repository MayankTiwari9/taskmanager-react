import React from 'react';
import {isAuthenticated, logout} from "./Auth";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    if(!isAuthenticated){
        navigate("/");
        return null;
    }

    const logoutHandler = () => {
        logout();
        navigate("/");
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Dashboard;