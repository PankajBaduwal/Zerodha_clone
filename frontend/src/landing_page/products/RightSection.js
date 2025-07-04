import React from 'react';

function RightSection({ imgeurl, ProductName, productDesription, learnMore }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6">
          <h1 style={{ fontWeight: 500, fontSize: '2.5rem', color: '#212529' }}>{ProductName}</h1>
          <p style={{ fontSize: '1.1rem', color: '#4b4b4b', lineHeight: '1.8rem' }}>
            {productDesription}
          </p>
          <a
            href="#"
            style={{
              color: '#0d6efd',
              textDecoration: 'none',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '1rem'
            }}
          >
            {learnMore} <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imgeurl}
            alt={ProductName}
            style={{
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
