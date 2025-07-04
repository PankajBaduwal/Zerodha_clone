import React from 'react';

function Pricing() {
    return (
       <div className='container '>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='/pricing' style={{textDecoration:'none'}}>See Pricing<i className="fa-solid fa-arrow-right mr-5"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mb-5'>
                <div className='row text-center'>
                    <div className='col-6 p-3 border'>
                        <h1>₹0</h1>
                        <p className=''>Fre equility delivery <br></br> and direct mutual funds</p>
                    </div>
                    <div className='col-6  p-3 border'>
                        <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>

                </div>
            </div>

        </div>
       </div>
      );
}

export default Pricing;