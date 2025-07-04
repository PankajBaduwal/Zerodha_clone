import React from 'react';
import Universe from './Universe';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function PorductPage() {
    return ( 
        
        <>
        <Hero/>
        <LeftSection imgeurl="media/images/kite.png"
          ProductName="Kite" 
          productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.Try demo " 
          tryDemo=""
           learnMore=""
            googlePlay="" 
            appStore=""/>

     <RightSection
  imgeurl="media/images/console.png"
  ProductName="Console"
  productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  learnMore="Learn more"
/>


        <LeftSection imgeurl="media/images/coin.png"
          ProductName="Coin" 
          productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.Coin  " 
          tryDemo=""
           learnMore=""
            googlePlay="" 
            appStore=""/>

<RightSection imgeurl="media/images/Kiteconnect.png" ProductName="Kite Connect API
" productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="Kite Connect" />
        <LeftSection imgeurl="media/images/varsity.png"
          ProductName="Varsity mobile"
          productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
          tryDemo=""
           learnMore=""
            googlePlay="" 
            appStore=""/>
            <p className='text-center fs-4'>
                Want to know more about our technology stack? Check out the
                     <a href='#' style={{textDecoration:'none'}}>Zerodha.tech</a>  blog.
            </p>
          
        <Universe/>
        </>
     );
}

export default PorductPage;