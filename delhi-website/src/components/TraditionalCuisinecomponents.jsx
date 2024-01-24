


import React from 'react';

const TraditionalCuisineComponents = () => {
  const blogGridItemStyle = {
    visibility: 'visible',
    animationName: 'fadeInUp',
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    marginTop: '40px',
    ...blogGridItemStyle,
  };

  const blogItems = [
    // Add your blog items here
    {
      imageSrc: 'assets/images/traditional-cuisine/parantha.jpg',
      title: 'Parantha',
      description: 'Paranthas are North Indian flatbreads, stuffed with various fillings like potatoes, vegetables, or meats, cooked until crispy and flavorful.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/chole-bhature.jpg',
      title: 'Chole Bhature',
      description: 'A North Indian delight featuring spicy chickpea chole paired with deep-fried, fluffy bhature, creating a flavorful combination.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/biryani.jpg',
      title: 'Biryani',
      description: 'Biryani, a fragrant rice dish, combines aromatic spices with marinated meat, creating a delectable and flavorful in Delhi.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/nihari.jpg',
      title: 'Nihari',
      description: 'A slow-cooked stew, Nihari is a breakfast specialty that originated in Delhi. It,s a rich, spicy dish traditionally eaten before dawn.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/kebabs.jpg',
      title: 'Kebabs',
      description: 'Delhi kebabs are succulent, spiced, and grilled to perfection, offering a mouthwatering blend of flavors and fragrant aromas.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/dahi-bhalla.jpg',
      title: 'Dahi Bhalla',
      description: 'Lentil dumplings soaked in creamy yogurt, garnished with spices, tamarind chutney, and crispy sev, creating a delightful, tangy treat.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/delhi-street-food.jpg',
      title: 'Street Food Delights',
      description: 'Delhi street food delights offer a sensory adventure: from spicy chaats to crispy samosas, they a burst of flavor and culture.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/butter-chicken.jpg',
      title: 'Butter Chicken',
      description: 'A creamy, tomato-based Indian classNameic, tender tandoori chicken in a rich, velvety sauce with a hint of smokiness.',
    },
    {
      imageSrc: 'assets/images/traditional-cuisine/jalebi-and-rabri.jpg',
      title: 'Jalebi and Rabri',
      description: 'A sweet Indian dessert, jalebi is a coiled, deep-fried delicacy soaked in sugar syrup, often served with creamy rabri.',
    },
   
  ];

  return (
    <>
      <section className="blog-page-area py-100 rpy-100 rel z-1">
        <div className="container">
          <div style={sectionTitleStyle} className="section-title text-center mb-60 rmb-40 wow fadeInUp delay-0-2s animated">
            <span className="sub-title mb-15">Traditional Cuisine</span>
            <h2>Delhi's Culinary Kaleidoscope</h2>
          </div>
          <div className="row justify-content-center">
            {blogItems.map((item, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                <div className="blog-grid-item wow fadeInUp delay-0-2s animated" style={blogGridItemStyle}>
                  <div className="image">
                    <img src={item.imageSrc} alt="Blog" />
                  </div>
                  <div className="blog-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
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

export default TraditionalCuisineComponents;
