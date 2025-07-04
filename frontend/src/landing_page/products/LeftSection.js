import React from 'react';


function LeftSection({imgeurl, ProductName, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
    return (  
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 mb-5'>
                <img src={imgeurl}/>
            </div>
            <div className='col-6  mt-5'>
                <h1>{ProductName}</h1>
                <p>{productDesription}</p>
                <div>
<a href={tryDemo}style={{textDecoration:'none'}}>Try Demo<i className="fa-solid fa-arrow-right mr-5"></i></a>
<a href={tryDemo}style={{textDecoration:'none', marginLeft:"20%" }}>learn More<i className="fa-solid fa-arrow-right mr-5"></i></a>
                </div>

                <div className='mt-3'><a href={googlePlay}> <img src='media/images/googlePlayBadge.svg'/></a>
                <a href={appStore} style={{marginLeft:'10%' }}> <img src='media/images/appstoreBadge.svg'/></a></div>
                
            </div>
        </div>
     </div>
    );
}

export default LeftSection;