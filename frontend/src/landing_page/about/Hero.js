import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mt-4">
      <div className="row mb-5">
        <h1 className="fs-4 text-center ">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            ver 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <Link
              to="/rainmatter"
              style={{ color: "#0d6efd", textDecoration: "none" }}
            >
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link
              to="/blog"
              style={{ color: "#0d6efd", textDecoration: "none" }}
            >
              blog
            </Link>
            , see what the{" "}
            <Link
              to="/media"
              style={{ color: "#0d6efd", textDecoration: "none" }}
            >
              media is saying about us
            </Link>
            , or learn more about our business and product{" "}
            <Link
              to="/philosophy"
              style={{ color: "#0d6efd", textDecoration: "none" }}
            >
              philosophies
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
