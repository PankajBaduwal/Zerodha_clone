import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3 fw-bold">The Zerodha Universe</h2>
      <p className="text-center mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row text-center">
        {/* Column 1 */}
        <div className="col-md-4 d-flex flex-column align-items-center px-4">
          {/* Zerodha Fundhouse */}
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            style={{ maxWidth: '100px', marginBottom: '20px' }}
          />
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '250px', lineHeight: '1.6' }}>
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>

          {/* Streak */}
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ maxWidth: '100px', marginTop: '40px', marginBottom: '20px' }}
          />
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '250px', lineHeight: '1.6' }}>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-md-4 d-flex flex-column align-items-center px-4">
          {/* Sensibull */}
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ maxWidth: '100px', marginBottom: '20px' }}
          />
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '250px', lineHeight: '1.6' }}>
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>

          {/* Smallcase */}
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ maxWidth: '100px', marginTop: '40px', marginBottom: '20px' }}
          />
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '250px', lineHeight: '1.6' }}>
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 d-flex flex-column align-items-center px-4">
          {/* Tijori */}
          <img
            src="media/images/zerodhaFndhouse.png"
            alt="Tijori"
            style={{ maxWidth: '100px', marginBottom: '20px' }}
          />
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '250px', lineHeight: '1.6' }}>
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>

          {/* Ditto */}
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ maxWidth: '100px', marginTop: '40px', marginBottom: '20px' }}
          />
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '250px', lineHeight: '1.6' }}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
                                <button className='p-2 btn btn-primary mt-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Signup Now</button>

      </div>

    </div>

  );
}

export default Universe;
