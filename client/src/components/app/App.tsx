import React from 'react';
import './App.css';
import LognPage from '../pages/auth/loginPage';
import Main from '../main/Main';
import UserPage from '../pages/user/UserPage';

function App() {
  const isAuthenticated: boolean = true;
  return (
    <>
     {isAuthenticated ? <UserPage /> : <LognPage />}
    </>
  );
}

export default App;
