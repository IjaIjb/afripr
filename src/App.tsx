import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/Index';

function App() {
  return (
    <div>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      }>
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
