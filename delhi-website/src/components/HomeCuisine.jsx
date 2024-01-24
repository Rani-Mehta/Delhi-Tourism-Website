import React from 'react';

const HomeCuisine = () => {
  const commonStyle = {
    visibility: 'visible',
    animationName: 'fadeInUp',
  };

  const blogItems = [
    {
      title: 'Parantha',
      imageSrc: 'assets/images/traditional-cuisine/parantha.jpg',
      description: 'Paranthas are North Indian flatbreads, stuffed with various fillings like potatoes, vegetables, or meats, cooked until crispy and flavorful.',
    },
    {
      title: 'Chole Bhature',
      imageSrc: 'assets/images/traditional-cuisine/chole-bhature.jpg',
      description: 'A North Indian delight featuring spicy chickpea chole paired with deep-fried, fluffy bhature, creating a flavorful combination.',
    },
    {
      title: 'Biryani',
      imageSrc: 'assets/images/traditional-cuisine/biryani.jpg',
      description: 'Biryani, a fragrant rice dish, combines aromatic spices with marinated meat, creating a delectable and flavorful dish in Delhi.',
    },
    // Add more blog items as needed
  ];

  return (
    <>
      <section className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 rmb-40 wow fadeInUp delay-0-2s animated" style={commonStyle}>
            <span className="sub-title mb-15">Traditional Cuisine</span>
            <h2>Delhi's Culinary Kaleidoscope</h2>
          </div>
          <div className="row justify-content-center">
            {blogItems.map((blogItem, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                <div className="blog-grid-item wow fadeInUp delay-0-2s animated" style={commonStyle}>
                  <div className="image">
                    <img src={blogItem.imageSrc} alt={blogItem.title} />
                  </div>
                  <div className="blog-content">
                    <h4>{blogItem.title}</h4>
                    <p>{blogItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCuisine;
