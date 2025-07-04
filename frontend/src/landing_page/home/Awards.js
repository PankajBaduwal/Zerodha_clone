import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 '>
<img src='media/images/largestBroker.svg' alt='largest-broker'/>
                </div>
                <div className='col-6 p-5 mt-5'>
<h1>largest stock broker in India</h1>
<p className='mb-5'>2+ million Zerodha clients contribut to over 15% of all retail order volumnes in india Daily by trading and investing in:</p>
<div className='row'>
    <div className='col-6'><ul>
    <li>
        <p>Futures and Options</p>
    </li>
    <li>
        <p>Commodity Derivatives</p>
    </li>
    <li>
        <p>Currency Derivatives</p>
    </li>
</ul></div>
    <div className='col-6'><ul>
    <li>
        <p>Stocks & IPOS</p>
    </li>
    <li>
        <p>Direct Mutual funds</p>
    </li>
    <li>
        <p>Bonds and Gov Secruity</p>
    </li>
</ul>
</div>

</div>
<img src='media/images/pressLogos.png' alt='Presslogo' style={{width:"90%"}}/ >
                </div>

            </div>
        </div>
     );
}

export default Awards;
