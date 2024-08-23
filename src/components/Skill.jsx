import React from 'react';
import skillsData from '../data/skills.json'; 

function Skill() {
  return (
    <section className="box-content Skills">
      <div className="skills-list">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill-item">
            <img className="skill-icon" src={skill.icon} alt={skill.title} />
            <h2>{skill.title}</h2>
            <div className="skill-images">
              {skill.skills.map((skillImg, index) => (
                <img key={index} className="skill-image" src={skillImg} alt="Skill" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
