import React from 'react'

const HomeComponents = () => {
  return (
    <>
       <section className="food-drink-area pt-130 rpt-100 pb-50 rpb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="food-drink-content rmb-55">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">Food & Drink</span>
                                <h2>Quality Food & Drink Your Trip Are Enjoyable</h2>
                                <p>Sed ut perspiciatis unde omniste natus voluptatem accusantiume doloremque laudantium, totam rem aperiam inventore</p>
                            </div>
                            <div className="feature-list">
                                <div className="feature-item wow fadeInUp delay-0-2s">
                                    <div className="icon">
                                        <i className="flaticon-check-mark"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Free breakfast, tea & coffee</h5>
                                        <p>To take a trivial example, which undertakes laborious ways</p>
                                    </div>
                                </div>
                                <div className="feature-item wow fadeInUp delay-0-3s">
                                    <div className="icon">
                                        <i className="flaticon-check-mark"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Quality Foods & kitchen</h5>
                                        <p>Sed ut perspiciatis omniste natus voluptatem accusan</p>
                                    </div>
                                </div>
                            </div>
                            <a href="about.html" className="delhi-btn style-two mt-25 wow fadeInUp delay-0-4s">Learn More Hotel <i className="far fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="food-drink-image rel wow fadeInUp delay-0-4s">
                            <img src="assets/images/food/food-restaurent.jpg" alt="Food Restaurent"/>
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeComponents;
