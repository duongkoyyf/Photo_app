import Home from "component/Home/Home";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import AddEditPhoto from "./features/Photo/AddEditPhoto";


function App() {
  // const Photo=React.lazy(()=>import('./features/Photo'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header />
        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Main />} />
          <Route path="photo/add" element={<AddEditPhoto />} />
          <Route path="photo/edit/:photoId" element={<AddEditPhoto />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
