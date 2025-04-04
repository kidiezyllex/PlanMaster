"use client";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWrap from './LayoutWrap';
import Home from '@/app/PERT/page';
function App() {
    return (
      <BrowserRouter>
        <LayoutWrap auth={false}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </LayoutWrap>
      </BrowserRouter>
    );
  }
  
  export default App;