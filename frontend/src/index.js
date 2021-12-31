import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Search from './pages/search/Search'
import Home from './pages/home/Home';
import Genrelist from './pages/genrelist/Genrelist';
import Watch from './pages/watch/Watch';
import Genre from './pages/genre/Genre';
import NotFound from './components/notfound/NotFound';
import Popular from './pages/popular/Popular';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/search/:term/:page" element={<Search />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/genrelist" element={<Genrelist />} />
        <Route path="/watch/:id/:episode" element={<Watch />} />
        <Route path="/genre/:type/:page" element={<Genre />} />
        <Route path="/popular/:page" element={<Popular />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);