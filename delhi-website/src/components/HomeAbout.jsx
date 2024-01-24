import React from 'react'
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  
 
  return (
    <>
       <section className="about-area pt-130 rpt-100 rel">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="about-three-image-part rmb-55 rel">
                            <div className="first-image wow fadeInRight delay-0-2s animated" style={{ visibility: 'visible', cl: 'fadeInRight',}}>
                                <img src="assets/images/about/about-three-first.jpg" alt="About"/>
                            </div>
                            <div className="middle-image wow fadeInDown delay-0-3s animated" style={{ visibility: 'visible', animationName: 'fadeInDown',}}>
                                <img src="assets/images/about/about-three.jpg" alt="About"/>
                            </div>
                            <div className="last-image wow fadeInLeft delay-0-4s animated" style={{visibility: 'visible', animationName: 'fadeInLeft',}}>
                                <img src="assets/images/about/about-three-last.jpg" alt="About"/>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content-part">
                            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">About Delhi</span>
                                <h2>Delhi Where Heritage Meets Modernity</h2>
                                <p>Delhi, the capital of India, is a city that beautifully encapsulates the coexistence of rich cultural heritage and modernity. It stands as a testament to India's glorious past while embracing the opportunities of the present and the future.</p>
                            </div>
                            <div className="feature-list wow fadeInUp delay-0-3s">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="flaticon-check-mark"></i>
                                    </div>
                                    <div className="content">
                                        <h5>A Tapestry of Heritage</h5>
                                      
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="flaticon-check-mark"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Cultural Vibrancy</h5>
                                     
                                    </div>
                                </div>
                             
                            </div>
                             

                            <div className="feature-list mb-15 wow fadeInUp delay-0-3s animated" sstyle={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="flaticon-check-mark"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Modern Marvels</h5>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="flaticon-check-mark"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Local Insights</h5>
                                    </div>
                                </div>
                         
                            </div>
                            <Link to="/About" className="delhi-btn wow fadeInUp delay-0-4s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Read More  <i className="far fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
     
        </section>
    </>
  )
}

export default HomeAbout;
