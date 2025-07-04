import React from 'react';

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row border-top pt-5">
        {/* Brokerage calculator section */}
        <div className="col-md-6 mb-5">
          <h5 style={{ color: '#0d6efd' }}>Brokerage calculator</h5>
          <ul className="text-muted" style={{ fontSize: '15px', paddingLeft: '1rem', lineHeight:'2.1rem' }}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>

        {/* List of charges section */}
        <div className="col-md-6">
          <h5 style={{ color: '#0d6efd' }}>List of charges</h5>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
