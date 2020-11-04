import React from 'react';
import './App.css';
import LognPage from '../pages/auth/loginPage';
import Main from '../main/Main';

function App() {
  const isAuthenticated: boolean = true;
  return (
    <>
     {isAuthenticated ? <Main /> : <LognPage />}
    </>
  );
}

export default App;
