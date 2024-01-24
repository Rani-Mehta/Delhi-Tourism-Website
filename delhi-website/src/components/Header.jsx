import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>

   {/* <!-- Preloader --> */}
{/* <div className="preloader"></div>  */}
        {/* <!-- main header --> */}
        <header className="main-header header-white">
      {/* <!--Header-Upper--> */}
            <div className="header-upper">
                <div className="container container-1720 clearfix">

                    <div className="header-inner rel d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo"><Link to="/"><img src="assets/images/logos/logo.png" alt="Logo" title="Logo"/></Link></div>
                        </div>

                        <div className="nav-outer clearfix me-auto">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                   <div className="mobile-logo my-15">
                                       <Link to="/">
                                            <img src="assets/images/logos/logo.png" alt="Logo" title="Logo"/>
                                       </Link>
                                   </div>
                                   
                                    {/* <!-- Toggle Button --> */}
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                    <ul className="navigation clearfix">
                                        <li>
                                            <Link to="/">Home</Link>
                                          </li>
                                        <li>
                                            <Link to="about">About Us</Link>
                                          
                                        </li>
                                        <li className="dropdown"><Link to="#">Culture</Link>
                                            <ul>
                                                <li><Link to="/FestivalsCelebrations">Festivals & Celebrations</Link></li>
                                                <li><Link to="/TraditionalCuisine">Traditional Cuisine</Link></li>
                                                <li><Link to="/Artscratspage">Arts & Crafts</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="dropdown"><Link to="#">Modern Delhi</Link>
                                            <ul>
                                                <li><Link to="/ShoppingMarketpage">Shopping & Markets</Link></li>
                                                <li><Link to="/PageNightlife">Entertainment & Nightlife</Link></li>
                                               
                                              
                                            </ul>
                                        </li>
                                    
                                  <li><Link to="/Contactpage">Contact</Link></li>
                                    </ul>
                                </div>

                            </nav>
                            {/* <!-- Main Menu End--> */}
                        </div>
                        
                     {/* <!-- Menu Button --> */}
                        <div className="menu-btns">
                           <Link to="/Contactpage" className="delhi-btn"> Enquiry <i className="far fa-angle-right"></i></Link>
                           
                          
                            {/* <!-- menu sidbar --> */}
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--End Header Upper--> */}
        </header>
    
       
       



    </>
  )
}

export default Header;
