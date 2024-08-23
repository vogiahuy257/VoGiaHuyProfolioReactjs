
// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import SidebarMobile from './components/SidebarMobile.jsx';
import Content from './Content.jsx';

function App() {
  return (
    <Router basename="/VoGiaHuyProfolioReactjs">
      <section id="main">
        <div className="container">
          <Header />
          <Sidebar />
          <Content />
          <SidebarMobile />
        </div>
      </section>
    </Router>
  );
}

export default App;
