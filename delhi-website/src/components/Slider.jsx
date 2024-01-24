import React from 'react'
import { Link } from 'react-router-dom';
const Slider = () => {
  return (
    <>
       {/* <!--Form Back Drop--> */}
       <div className="form-back-drop"></div>
        {/* <!-- Slider Section Start --> */}
        <section className="main-slider-area bgc-black-with-lighting rel z-1">
           <div className="main-slider-active">
                <div className="slider-item">
                    <div className="container">
                        <div className="row justify-content-end align-items-center">
                            <div className="col-xl-3">
                                <div className="slider-content">
                                    <span className="sub-title"><i className="fal fa-arrow-right"></i> Welcome to Delhi</span>
                                    <h1>Discover Delhi's  <span>Rich Heritage</span></h1>
                                    <Link to="/TraditionalCuisine" className="delhi-btn">Explore Our Delhi<i className="far fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="slider-image">
                                    <img src="assets/images/slider/slide-3.jpg" alt="Slider"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="container">
                        <div className="row justify-content-end align-items-center">
                            <div className="col-xl-3">
                                <div className="slider-content">
                                    <span className="sub-title"><i className="fal fa-arrow-right"></i>  Welcome to Delhi</span>
                                    <h1>Journey Through<span> Delhi's History</span></h1>
                                    <Link to="/FestivalsCelebrations" className="delhi-btn">Traditional Cuisine<i className="far fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="slider-image">
                                    <img src="assets/images/slider/slide-2.jpg" alt="Slider"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="slider-item">
                    <div className="container">
                        <div className="row justify-content-end align-items-center">
                            <div className="col-xl-3">
                                <div className="slider-content">
                                    <span className="sub-title"><i className="fal fa-arrow-right"></i> Welcome to Delhi</span>
                                    <h1>Experience Delhi's <span>Timeless Charm </span></h1>
                                    <Link to="/Artscratspage" className="delhi-btn">About Us<i className="far fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="slider-image">
                                    <img src="assets/images/slider/slide-1.jpg" alt="Slider"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className="container">
               <div className="row justify-content-center">
                   <div className="col-xl-10">
                       <div className="main-slider-dots"></div>
                   </div>
               </div>
           </div>
            <div className="slider-shapes">
               <img className="shape circle-half" src="assets/images/shapes/slider-circle-half.png" alt="Shape"/>
               <img className="shape circle" src="assets/images/shapes/slider-circle.png" alt="Shape"/>
            </div>
           
        </section>
        {/* <!-- Slider Section End --> */}
    </>
  )
}

export default Slider;
