import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/Index';

function App() {
  return (
    <div>
      <Suspense fallback="">
        <Routes>
          {routes.map(
            (route: any, i: number) =>
              route.component && (
                <Route key={i} path={route.path} element={<route.component />} />
              )
          )}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
