// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="box-mobile">
        <a href="https://www.facebook.com/profile.php?id=100023020324055">
          <img width="25px" height="25px" src="/img/1facebook.png" alt="facebook icon" />
        </a>
        <a href="https://github.com/vogiahuy257/VoGiaHuyProfolio">
          <img width="25px" height="25px" src="/img/github.png" alt="github icon" />
        </a>
      </div>
      <div className="box-text">
        <h1>Võ Gia Huy</h1>
        <img src="/img/avatar.jpg" alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
