import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import routes from './pages/routes';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.component />} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
