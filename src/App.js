import { useEffect, useState } from 'react';
import './App.css';
import UserData from './UserData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import UserDetail from './UserDetail';
function App() {
  
  return (
    <div className="App">
      <h1>Crud with Json Web Server</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={UserData} />
        <Route path='/user/create' Component={UserCreate} />
        <Route path='/user/detail/:uid' Component={UserDetail} />
        <Route path='/user/edit/:uid' Component={UserEdit} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
