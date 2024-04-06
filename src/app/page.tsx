"use client";
import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';

import Home from "./components/home";
import Test from "./components/test";
import Seminar3 from "./components/seminar3";
import Seminar4 from "./components/seminar4";



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/seminar3" element={<Seminar3 />} />
        <Route path="/seminar4" element={<Seminar4 />} />
        
      </Routes>
    </HashRouter>
  )
}