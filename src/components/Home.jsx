// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <section className="box-content Home">
      <div className="text-content">
        <h1>Welcome to my portfolio!</h1>
        <p>I'm Võ Gia Huy. <br/>I believe that growth is a continuous journey, and every goal is just another step towards becoming a better version of myself.</p>
        <a href="mailto:vogiahuy257@gmail.com" className="btn">Contact Me</a>
      </div>

      <div className="box-img">
        <img src="./img/avatar.jpg" alt="avatar"/>
        <div className="text-img">
        <p>"Goals are not a destination, but a journey of continuous learning and growth, to become the best version of oneself."</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
