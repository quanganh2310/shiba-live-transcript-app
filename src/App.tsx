import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import routes from './pages/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.path} path={route.path} element={route.component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
