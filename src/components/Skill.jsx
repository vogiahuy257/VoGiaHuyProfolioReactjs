import React, { useEffect, useState } from 'react';

function Skill() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error fetching skills data:', error));
  }, []);

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
