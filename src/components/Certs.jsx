import React, { useState } from 'react';
import certificatesData from '../data/certificates.json'; 

function Certs() {
  const [certificates] = useState(certificatesData); 
  const [selectedCert, setSelectedCert] = useState(null);

  const groupTitles = {
    'Google': 'Certificates from Google',
    'IBM': 'Certificates from IBM',
    'Meta': 'Certificates from Meta',
    'General': 'Certificates from General'
  };

  // Nhóm chứng chỉ theo nhà phát hành
  const groupedCertificates = certificates.reduce((acc, cert) => {
    (acc[cert.issuer] = acc[cert.issuer] || []).push(cert);
    return acc;
  }, {});

  const handleCertClick = (id) => {
    setSelectedCert(certificates.find(cert => cert.id === id));
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="box-content Certs">
      {selectedCert ? (
        <div className="cert-modal" onClick={handleCloseModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <img className="cert-modal-image" src={selectedCert.image} alt={selectedCert.title} />
            <h1>{selectedCert.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: selectedCert.details }} />
            <button className="cert-modal-close" onClick={handleCloseModal}>Back to Cert</button>
          </div>
        </div>
      ) : (
        <div className="cert-groups ">
          {Object.keys(groupedCertificates).map(issuer => (
            <div key={issuer} className="cert-group">
              <h2 className="cert-group-title">{groupTitles[issuer]}</h2>
              <div className="cert-list">
                {groupedCertificates[issuer].map(cert => (
                  <div key={cert.id} className="cert-item" onClick={() => handleCertClick(cert.id)}>
                    <img className="cert-image" src={cert.image} alt={cert.title} />

                    <h2 className='cert-text'>{cert.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Certs;
