import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import dotenv from 'dotenv';
import Home from './Pages/Home';
import Explore from './Pages/Explore/Explore';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';

dotenv.config();

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/photos">
          <Route index element={<Home />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
