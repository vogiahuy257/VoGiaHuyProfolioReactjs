import React, { useState } from 'react';
import experiencesData from '../data/experiences.json'; // Import dữ liệu từ JSON

function Work() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experiences] = useState(experiencesData); // Sử dụng dữ liệu đã import

  const handleExperienceClick = (id) => {
    setSelectedExperience(experiences.find(exp => exp.id === id));
  };

  return (
    <section className="box-content Work">
      {selectedExperience ? (
        <div className="experience-detail">
          <img className="detail-image" src={selectedExperience.image} alt={selectedExperience.title} />
          <h1>{selectedExperience.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: selectedExperience.details }} />
          <button onClick={() => setSelectedExperience(null)}>Back to List</button>
        </div>
      ) : (
        <div className="experience-list">
          {experiences.map(exp => (
            <div 
              key={exp.id} 
              className="experience-item" 
              onClick={() => handleExperienceClick(exp.id)}
            >
              <div className="box-time">
                <p>{exp.date}</p>
              </div>
              <img src={exp.image} alt={exp.title} />
              <div className="experience-text">
                <h2>{exp.title}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Work;
