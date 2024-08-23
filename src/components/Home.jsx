// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <section className="box-content Home">
      <div className="text-content">
        <h1>Welcome to my portfolio!</h1>
        <p>I'm Võ Gia Huy, a Front-end developer and UI/UX designer.<br/>With a passion for crafting seamless user experiences. My goal is to bring ideas to life through clean, efficient code and thoughtful design.</p>
        <a href="mailto:vogiahuy257@gmail.com" className="btn">Contact Me</a>
      </div>

      <div className="box-img">
        <img src="./img/huy.jpg" alt="avatar"/>
        <div className="text-img">
          <p>"I believe that when someone keeps striving, 'genius' is just a term, and nothing is impossible in this world as long as you believe you can achieve it."</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
