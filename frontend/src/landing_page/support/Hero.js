import React from 'react';

function Hero() {
  return (
    <div className='container-fluid bg-primary text-white p-5' id='supportHero'>
      {/* Top Bar */}
      <div className='headerInfo d-flex justify-content-between align-items-center mb-4'>
        
       
      </div>

      {/* Main Row */}
      <div className='row'>
        {/* Left Column */}
        <div className='col-md-6 d-flex flex-column align-items-center  px-5'>
            <h4 className='fw-semibold mb-5'>Support Portal</h4>
          <h3 className='mb-4'>
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            className='form-control mb-4'
            type='text'
            placeholder='Eg: how do I activate F&O, why is my order getting rejected...'
          />

          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <a href='' className='text-white text-decoration-underline'>Track account opening</a>
            <a href='' className='text-white text-decoration-underline'>Track segment activation</a>
            <a href='' className='text-white text-decoration-underline'>Intraday margins</a>
            <a href='' className='text-white text-decoration-underline'>Kite user manual</a>
          </div>
        </div>

        {/* Right Column */}
        <div className='col-md-6 d-flex flex-column align-items-center text-center px-5'>
             <a href='' className='text-white text-decoration-underline mb-5'>Track Tickets</a>
          <h5 className='mb-3'>Featured</h5>
          <ol className='ps-3'>
            <li>
              <a href='' className='text-white text-decoration-underline'>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li className='mt-2'>
              <a href='' className='text-white text-decoration-underline'>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
