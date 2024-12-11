import React, { Component } from 'react';
import axios from 'axios'; // Import Axios
import './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

const likes = [
  {
    id: 1,
    name: 'Peter Breis',
    duration: '3 days ago',
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/b8ba/1462/2ed0bf1d21fc23474f0365bacebc6532?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsfQUMz4N8nLlR-6emzSSXu779jLRKZ50nEcMTgYyVrJbl4cfVtzv9pq2HaokaogQrQJQDGPGxaEHBf0cYhIahWz9T4ByLLhdJv~njXYetzH-Cz9PGxrpwAOMwevJWEMz5HvNaOG9lkvIkvPEs9uEiHu59Rrse0LSQZpbFQTr9XwNY74T6Is0fAW2SIAczq3MEOLfCnJF21Lvlh7Ufo4yf0cwn6kUnCurh90mH3WjZJGheY3zvIQTI1QfBfi20xu~zVUWt~1QcI1gVGDU~cp-M51B9C8Ho2yEq-bFSHk7DOoeBWKF~PFImfEwRrRdcOioOPhfLUb92afhZemO7AV7Q__',
    desc: 'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.',
  },
  {
    id: 1,
    name: 'Peter Breis',
    duration: '3 days ago',
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/b8ba/1462/2ed0bf1d21fc23474f0365bacebc6532?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsfQUMz4N8nLlR-6emzSSXu779jLRKZ50nEcMTgYyVrJbl4cfVtzv9pq2HaokaogQrQJQDGPGxaEHBf0cYhIahWz9T4ByLLhdJv~njXYetzH-Cz9PGxrpwAOMwevJWEMz5HvNaOG9lkvIkvPEs9uEiHu59Rrse0LSQZpbFQTr9XwNY74T6Is0fAW2SIAczq3MEOLfCnJF21Lvlh7Ufo4yf0cwn6kUnCurh90mH3WjZJGheY3zvIQTI1QfBfi20xu~zVUWt~1QcI1gVGDU~cp-M51B9C8Ho2yEq-bFSHk7DOoeBWKF~PFImfEwRrRdcOioOPhfLUb92afhZemO7AV7Q__',
    desc: 'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.',
  },

  {
    id: 1,
    name: 'Peter Breis',
    duration: '3 days ago',
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/b8ba/1462/2ed0bf1d21fc23474f0365bacebc6532?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsfQUMz4N8nLlR-6emzSSXu779jLRKZ50nEcMTgYyVrJbl4cfVtzv9pq2HaokaogQrQJQDGPGxaEHBf0cYhIahWz9T4ByLLhdJv~njXYetzH-Cz9PGxrpwAOMwevJWEMz5HvNaOG9lkvIkvPEs9uEiHu59Rrse0LSQZpbFQTr9XwNY74T6Is0fAW2SIAczq3MEOLfCnJF21Lvlh7Ufo4yf0cwn6kUnCurh90mH3WjZJGheY3zvIQTI1QfBfi20xu~zVUWt~1QcI1gVGDU~cp-M51B9C8Ho2yEq-bFSHk7DOoeBWKF~PFImfEwRrRdcOioOPhfLUb92afhZemO7AV7Q__',
    desc: 'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.',
  },

];

class Technicians extends Component {
  state = {
    techniciansList: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getTechnicians();
  }

  getTechnicians = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress, // Indicating loading state
    });

    const apiUrl = 'https://nviri-backend-3.onrender.com/technicians'; // Backend API URL

    try {
      const response = await axios.get(apiUrl); // Axios GET request
      const updatedData = response.data.map((each) => ({
        technicianId: each.technician_id,
        name: each.name,
        specialization: each.specialization,
        rating: each.rating,
        description: each.description,
        photo: each.photo, // Include photo URL
      }));

      this.setState({
        techniciansList: updatedData, // Save updated data in the state
        apiStatus: apiStatusConstants.success, // Indicating success state
      });
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure, // Indicating failure state
      });
      console.error('Error fetching technicians:', error.message);
    }
  };

  renderCarousel = () => {
    const { techniciansList } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, // Mobile devices
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings} className='vend-cont'>
        {techniciansList.map((technician) => (
          <li key={technician.technicianId} className="vend-itm">
            <div className='vend-item'>
            <img src={technician.photo} alt={technician.name} className="v-img" />
            <h3>{technician.name}</h3>
            </div>
            <div className='vend-sub'>
            <p>{technician.specialization}</p>
            <p>Rating: {technician.rating}</p>
            <p>{technician.description}</p>
            <a>Show More</a>
            </div>
          </li>
        ))}
      </Slider>
      
     
    );
  };

  render() {
    const { techniciansList } = this.state;
    console.log(techniciansList);

    return (
      <section>
        <h1>Featured Vendors</h1>
        {this.renderCarousel()}
        <h1>See what our happy customers have to say about us</h1>
        <ul className="like-cont">
          {likes.map((each) => (
            <li className="like-item" key={each.id}>
              <img src={each.imgSrc} alt={each.name} className="like-image" />
              <div>
                <div className="star">
                  <p className="desc1">{each.name}</p>
                  <img
                    src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733754045/google_stars_3_mcdsww.png"
                    alt="stars"
                  />
                </div>
                <p className="desc1">{each.duration}</p>
                <p className="desc1">{each.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Technicians;
