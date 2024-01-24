import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      
      {/* <!-- footer area start --> */}
        <footer className="main-footer bgc-black-with-lighting pt-100 rel z-1">
            <div className="container">
                <div className="row justify-content-xl-between justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-sm-6">
                        <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
                            <div className="footer-logo mb-25">
                                <Link to="/"><img src="assets/images/logos/logo.png" alt="Logo"/></Link>
                            </div>
                            <p>At Delhi-Website, we are dedicated to providing you with the best experience. Explore our website to discover the beauty, culture, and heritage of Delhi. </p>
                            <div className="social-style-one pt-10">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                {/* <!-- <Link to="#"><i className="fab fa-behance"></i></Link> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                        <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="list-style-one">
                                <li><Link to="/about">About Delhi</Link></li>
                                <li><Link to="/FestivalsCelebrations">History</Link></li>
                                <li><Link to="/FestivalsCelebrations">Festivals & Celebrations</Link></li>
                                <li><Link to="/TraditionalCuisine">Traditional Cuisine</Link></li>
                                                <li><Link to="/Artscratspage">Arts & Crafts</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-sm-6">
                        <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                            <h4 className="footer-title">Features</h4>
                            <ul className="list-style-one">
                                <li><Link to="room-details.html">Free Transportation</Link></li>
                                <li><Link to="room-details.html">GYM & Fitness Care</Link></li>
                                <li><Link to="room-details.html">SPA Treatment</Link></li>
                                <li><Link to="room-details.html">Food & Drinks</Link></li>
                                <li><Link to="room-details.html">Breakfast</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-xl-4 col-sm-6">
                        <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
                            <h4 className="footer-title">Newsletter</h4>
                            <form action="#">
                                <input type="email" placeholder="Enter Address" required/>
                                <button className="delhi-btn">Subscribe <i className="far fa-angle-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bgd-dark mt-40 pt-20 pb-5 rpt-25">
                <div className="container">
                   <div className="row">
                       <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>© 2023 <Link to="index.html">Delhi-Website.</Link> All Rights Reserved.</p>
                            </div>
                       </div>
                       {/* <div className="col-lg-6 text-lg-end">
                           <ul className="footer-bottom-nav rpb-10">
                               <li><Link to="about.html">Terms</Link></li>
                               <li><Link to="about.html">Privacy Policy</Link></li>
                               <li><Link to="faqs.html">FAQs</Link></li>
                               <li><Link to="about.html">Cookie Policy</Link></li>
                           </ul>
                       </div> */}
                   </div>
                </div>
            </div>
            
            <div className="wave-shapes"></div>
            <div className="wave-shapes-two"></div>
        </footer>
        {/* <!-- footer area end --> */}
        
        
        {/* <!-- Scroll Top Button --> */}
        <button className="scroll-top scroll-to-target" data-target="html"><span className="fas fa-angle-double-up"></span></button>
    </>
  )
}

export default Footer;
