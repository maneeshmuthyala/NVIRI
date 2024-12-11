import React, { Component } from 'react';
import axios from 'axios'; // Import Axios
import './index.css';
import Footer from '../Footer';
import Header from '../Header';
import Services from '../Services';
import SearchAppliance from '../SearchAppliance';

class Home extends Component {
  state = {
    locationsList: [],
  };

  componentDidMount() {
    this.getLocations();
  }

  getLocations = async () => {
    const apiUrl = `https://nviri-backend-3.onrender.com/locations`; // API Endpoint

    try {
      const response = await axios.get(apiUrl); // Axios GET Request
      this.setState({
        locationsList: response.data, // Update state with fetched data
      });
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  };

  render() {
    const { locationsList } = this.state;
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Take care of your home needs now!</h1>
            <img
              src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736109/Group_34_bqi2os.png"
              alt="clothes that get you noticed"
              className="home-mobile-img"
            />
            <p className="home-description">
              ServicePro is your one-stop solution to troubleshoot, choose a vendor, and book a technician.
            </p>
            <div className="drop-container">
              <select>
                {locationsList.map((each, index) => (
                  <option value={each} key={index}>
                    {each}
                  </option>
                ))}
              </select>
              <div className="drop-sub">
                <p>Only in Ameerpet, Gachibowli, Madhapur</p>
              </div>
            </div>
            <div>
              <SearchAppliance />
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736109/Group_34_bqi2os.png"
            alt="clothes that get you noticed"
            className="home-desktop-img"
          />
        </div>
        <Services />
        <Footer />
      </>
    );
  }
}

export default Home;
