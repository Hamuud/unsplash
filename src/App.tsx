import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import dotenv from 'dotenv';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';
import PopUpPhoto from './Pages/PopUpPhoto/PopUpPhoto';
import SearchPage from './Pages/SearchPage/SearchPage';
import Collection from './Pages/Collection/Collection';

dotenv.config();

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="starter">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/photos">
            <Route index element={<Home />} />
            <Route path=":slug" element={<PopUpPhoto />} />
          </Route>

          <Route path="/search" element={<SearchPage />}>
            <Route index element={<SearchPage />} />
          </Route>

          <Route path="/collection" element={<Collection />}>
            <Route path=":tag" element={<Collection />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
};
