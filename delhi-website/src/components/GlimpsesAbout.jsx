import React from 'react';
import { Link } from 'react-router-dom';
const HomeGlimpses = () => {
    const myStyle = {
        color: '#612c00',
        textDecoration: 'none',
      };
  const glimpseItems = [
    {
      title: 'Historical Significance',
      imageUrl: 'assets/images/rooms/room-list1.jpg',
      description:
        "Delhi has a history that stretches back thousands of years. It has been the seat of several great empires, including the Mauryan, Gupta, and Mughal dynasties. Each era has left its mark on the city, resulting in a rich tapestry of historical sites and monuments. The Red Fort, Qutub Minar, and Humayun's Tomb are just a few examples of Delhi's architectural wonders.",
    },
    {
      title: 'Cultural Diversity',
      imageUrl: 'assets/images/rooms/room-list2.jpg',
      description:
        "The city's cultural diversity is a testament to India's pluralistic society. Delhi is a melting pot of traditions, languages, and cuisines. Its markets are a sensory delight, offering everything from sumptuous street food to exquisite handicrafts. The vibrant festivals celebrated here, such as Diwali, Eid, and Holi, reflect the tapestry of cultures that call Delhi home.",
    },
    {
      title: 'Modern Metropolis',
      imageUrl: 'assets/images/rooms/room-list3.jpg',
      description:
        "Delhi is not just steeped in history; it's also a thriving modern metropolis. The city is a hub for education, technology, and commerce. Its skyline is dotted with skyscrapers, and its public transportation system, including the Delhi Metro, is world-className. This juxtaposition of history and modernity is what makes Delhi truly unique.",
    },
    {
      title: 'Local Insights',
      imageUrl: 'assets/images/rooms/room-list4.jpg',
      description:
        "To truly experience Delhi, one must delve into its local life. Engage with the friendly locals, explore bustling markets, and savor the flavors of Delhi's street food. This city thrives on its people, and their warmth and stories add depth to every visit.",
    },
  ];

  return (
    <section className="rooms-list-area pt-100 pb-120 rpb-90 rel z-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-60 rmb-40 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15"> Glimpses of Delhi</span>
              <h2>Discover the Heart of India</h2>
            </div>
          </div>
        </div>
        {glimpseItems.map((item, index) => (
          <div key={index} className="room-list-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="content">
              <h3>
                <Link to="#" style={myStyle}>
                  {item.title}
                </Link>
              </h3>
              <p>{item.description}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeGlimpses;
