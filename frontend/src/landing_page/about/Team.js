import React from 'react';
import { Link } from "react-router-dom";

function Team() {
    return ( 
        <div className="container mt-4">
      <div className="row mb-5 border-top">
        <h1 className=" text-center mt-5   ">
         People
        </h1>
      </div>

      <div
        className="row mt-5 "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col text-center">
         <img src='media/images/nithinKamath.jpg' alt='nitinimage' style={{borderRadius:'100%', width:'40%'}}/>
         <h4 className='mt-5'>Nithin Kamath </h4>
         <h6 className='mb-5'>Founder, CEO</h6>

        </div>
        <div className="col ">
  <p>
    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader.
    Today, Zerodha has changed the landscape of the Indian broking industry.
  </p>

  <p>
    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
  </p>

  <p>
    Playing basketball is his zen.
  </p>

  <p>
    Connect on&nbsp;
    <Link to="/homepage" style={{ color: "#0d6efd", textDecoration: "none" }}>
      Homepage
    </Link>{" "}
    /{" "}
    <Link to="/tradingqna" style={{ color: "#0d6efd", textDecoration: "none" }}>
      TradingQnA
    </Link>{" "}
    /{" "}
    <Link to="/twitter" style={{ color: "#0d6efd", textDecoration: "none" }}>
      Twitter
    </Link>
  </p>
</div>

      </div>
    </div>
     );
}

export default Team;