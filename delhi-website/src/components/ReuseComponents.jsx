import React from 'react'

import { Link } from 'react-router-dom';

const ReuseComponents = () => {
  return (
    <>

   <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{backgroundImage: 'url("assets/images/background/banner-two.jpg")'}}>
            <div className="container">
                <div className="banner-inner text-white rpb-25">
                    <h1 className="page-title wow fadeInUp delay-0-2s">About Delhi</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><Link to="/">home</Link></li>
                            <li className="breadcrumb-item active">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        
        </section>
    </>
  )
}

export default ReuseComponents;
;