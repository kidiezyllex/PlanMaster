"use client";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globals.css';
import LayoutWrap from '@/component/LayoutWrap';
import Home from '@/app/home/page';
import LoginForm from '@/app/login/page';

function App() {
    return (
      <BrowserRouter>
        <LayoutWrap auth={false}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </LayoutWrap>
      </BrowserRouter>
    );
  }
  
  export default App;