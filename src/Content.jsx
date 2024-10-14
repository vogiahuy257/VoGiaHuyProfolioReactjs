// src/components/Content.jsx
import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Work from './components/Work.jsx';
import Skill from './components/Skill.jsx';
import Certs from './components/Certs.jsx';
import Reviews from './components/Reviews.jsx';


function Content() {

  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/certs" element={<Certs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default Content;
