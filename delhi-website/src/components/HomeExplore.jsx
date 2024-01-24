import React from 'react';
import { Link } from 'react-router-dom';

const HomeExplore = () => {
  const exploreItems = [
    {
      title: 'Culture',
      description: "Delhi's culture is a vibrant tapestry of traditions, festivals, and flavors.",
      price: 'Diverse Delhi Culture',
      imageUrl: 'assets/images/hotel/hotel1.jpg',
      buttonUrl:'/FestivalsCelebrations'
    },
    {
      title: 'Food Delights',
      description: "Savor Delhi's Culinary Treasures: A Gastronomic Adventure Awaits.",
      price: 'Culinary Delights of Delhi',
      imageUrl: 'assets/images/hotel/hotel2.jpg',
      buttonUrl:'/TraditionalCuisine'
    },
    {
      title: 'Arts & Crafts',
      description: "Delhi's Arts & Crafts: A Tapestry of Tradition and Creativity",
      price: 'Delhi Creative Crafts',
      imageUrl: 'assets/images/hotel/hotel3.jpg',
      buttonUrl:'/Artscratspage'
    },
    {
      title: 'Shopping & Markets',
      description: "Dive into Delhi's markets for a vibrant shopping experience.",
      price: "Delhi's Shopping Scene",
      imageUrl: 'assets/images/hotel/hotel4.jpg',
      buttonUrl:'/ShoppingMarketpage'
    },
  ];

  return (
    <>
      <section className="hotel-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-center mb-60 rmb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15"> Explore Delhi</span>
                <h2>Discover the Heart of India</h2>
              </div>
            </div>
          </div>
          <div className="hotel-carousel-active">
            {exploreItems.map((item, index) => (
              <div key={index} className="hotel-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="top">
                    <h3>
                     
                      <Link to={item.buttonUrl}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="bottom">
                    <div className="price">{item.price}</div>
                    
                    <Link className="delhi-btn style-two" to={item.buttonUrl}>Details <i className="fal fa-angle-right"></i></Link>
                  </div>
                </div>
                <div className="image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeExplore;
