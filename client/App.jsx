import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';
import NavBar from './components/NavBar';
import DashBoard from './containers/DashBoard';

const App = () => {
  return (
    <BrowserRouter>
      <Link to='/'>Login</Link>
      <Link to='/signUp'>Sign Up</Link>
      <Link to='/dashboard/search'>Dashboard Search</Link>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/signUp' element={<SignUpPage />}></Route>
        <Route path='/dashboard/*' element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
