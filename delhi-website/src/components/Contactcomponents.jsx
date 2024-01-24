import React from 'react'
import { Link } from 'react-router-dom';
const Contactcomponents = () => {
  return (
    <>
  <section className="page-banner-area pt-170 rpt-110 pb-190 rpb-125 rel z-1 bgs-cover bgc-black text-center" style={{backgroundImage: 'url(assets/images/background/banner-two.jpg)'}}>
            <div className="container">
                <div className="banner-inner text-white rpb-25">
                    <h1 className="page-title wow fadeInUp delay-0-2s">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><Link to="/">home</Link></li>
                            <li className="breadcrumb-item active">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        
        </section>


        
<section className="contact-page-area py-130 rpy-100 rel z-1">
            <div className="container">
               <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                            <div className="row">
                                <div className="col-xl-10">
                                    <div className="section-title mb-60">
                                        <span className="sub-title mb-15">Contact Us</span>
                                        <h2>Have Questions or Suggestions? Get in Touch!</h2>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="tab-content wow fadeInUp delay-0-2s animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                                <div className="tab-pane fade active show" >
                                    <div className="contact-info-item">
                                        <div className="icon">
                                            <i className="flaticon-location-1"></i>
                                        </div>
                                        <div className="content">
                                            <span className="title">Locations</span>
                                            <span className="text">M 1 Dlf City Gurgaon Gurgaon, Delhi,Delhi,122001,India</span>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <div className="icon">
                                            <i className="flaticon-email-marketing"></i>
                                        </div>
                                        <div className="content">
                                            <span className="title">Email Address</span>
                                            <span className="text">
                                                <Link to="mailto:delhiwebsite@gmail.com">delhiwebsite@gmail.com</Link>
                                               
                                            </span>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <div className="icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="content">
                                            <span className="title">Make A Call</span>
                                            <span className="text">
                                                <Link to="calto:+0001234568899">+000 (123) 456 88 99</Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-page-form wow fadeInUp delay-0-2s animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                          
                         
                            <div className="about-three-image-part rmb-55 rel">
                            <div className="first-image wow fadeInRight delay-0-2s animated animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
                                <img src="assets/images/about/about-three-first.jpg" alt="About"/>
                            </div>
                            <div className="middle-image wow fadeInDown delay-0-3s animated animated" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                                <img src="assets/images/about/about-three.jpg" alt="About"/>
                            </div>
                            <div className="last-image wow fadeInLeft delay-0-4s animated animated" style={{visibility: 'visible',  animationName: 'fadeInLeft'}}>
                                <img src="assets/images/about/about-three-last.jpg" alt="About"/>
                            </div>
                          
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    </>
  )
}

export default Contactcomponents;
