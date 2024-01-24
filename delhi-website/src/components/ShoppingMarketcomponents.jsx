import React from 'react';

const ArtsCraftComponents = () => {
  const artsCraftData = [
    {
      title: 'Handicrafts',
      description: "Delhi is renowned for its diverse handicrafts, including intricate embroidery, pottery, and textiles. Visit Dilli Haat for a unique shopping experience.",
      imageSrc: 'assets/images/art-craft/handicraft.jpg',
    },
    {
      title: 'Handloom Textiles',
      description: "Delhi's markets offer a wide array of handwoven textiles. Discover traditional Indian weaves like Banarasi, Chanderi, and Khadi.",
      imageSrc: 'assets/images/art-craft/handloom--textiles.jpg',
    },
    {
      title: 'Metalwork',
      description: "Skilled artisans in Old Delhi craft stunning metalwork items, from intricate jewelry to decorative pieces, using techniques passed down through generations.",
      imageSrc: 'assets/images/art-craft/metalwork.jpg',
    },
    {
      title: 'Street Art',
      description: "Explore the streets of Shahpur Jat and Lodhi Colony for vibrant street art and graffiti that express contemporary social and political messages.",
      imageSrc: 'assets/images/art-craft/street-art.jpg',
    },
    {
      title: 'Contemporary Art Galleries',
      description: "Delhi's thriving art scene is showcased in its numerous galleries. Explore the National Gallery of Modern Art and private galleries.",
      imageSrc: 'assets/images/art-craft/artgallery.jpg',
    },
    {
      title: 'Pottery',
      description: "Delhi has a rich tradition of pottery, with studios and workshops producing both functional and decorative ceramics.",
      imageSrc: 'assets/images/art-craft/pottery.jpg',
    },
    {
      title: 'Traditional Painting',
      description: "Discover miniature painting styles like Mughal and Rajasthani, as well as contemporary artists experimenting with various forms and themes.",
      imageSrc: 'assets/images/art-craft/traditional-painting.jpg',
    },
    {
      title: 'Jewelry Making',
      description: "Explore the markets of Chandni Chowk for exquisite handmade jewelry, from intricate Kundan sets to modern designs.",
      imageSrc: 'assets/images/art-craft/jewelry-making.jpg',
    },
  ];

  return (
    <>
      <section className="rooms-2columns-area pb-120 rpb-90 rel z-2" style={{paddingTop: '120px'}}>
        <div className="container container-1130">
          <div className="section-title text-center mb-60 rmb-40 wow fadeInUp delay-0-2s animated">
            <span className="sub-title mb-15">Arts & Crafts in Delhi</span>
            <h2> A World of Creativity</h2>
          </div>
          <div className="row gap-90">
            {artsCraftData.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="room-item style-three wow fadeInUp delay-0-2s animated">
                  <div className="image">
                    <img src={item.imageSrc} alt="Room"/>
                  </div>
                  <div className="content">
                    <div className="price">{item.title}</div>
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
}

export default ArtsCraftComponents;
