import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import Header from "./component/Header";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import Main from "./component/Main";
import AddEditPhoto from "./features/Photo/AddEditPhoto";

function App() {
  // const Photo=React.lazy(()=>import('./features/Photo'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="photo/add" element={<AddEditPhoto />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
