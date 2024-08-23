import React, { useState, useEffect } from 'react';

function Work() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/data/experiences.json')
      .then(response => response.json())
      .then(data => setExperiences(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
