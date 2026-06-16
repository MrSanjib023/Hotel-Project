import React from 'react';
import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpeg';
import about4 from '../assets/about4.jpeg';
import about5 from '../assets/about5.jpeg';
import about6 from '../assets/about6.jpeg';
import about7 from '../assets/about7.jpeg';

const About = () => {
  return (
    <>
    <div className="about">

      {/* Hero Section */}
      <section className="aboutHero">
        <div className="aboutOverlay">
          <h1>About Our Hotel</h1>
          <p>
            Where luxury meets comfort and every stay becomes a memorable
            experience.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="aboutStory">
        <div className="aboutText">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for exceptional hospitality, our hotel has
            been welcoming guests from around the world for years. We combine
            elegant accommodations, modern amenities, and personalized service
            to create unforgettable stays.
          </p>
        </div>

        <div className="aboutImage">
          <img
            src={about5}
            alt="Hotel"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="featureContainer">
          <div className="featureCard">
            <h3>Luxury Rooms</h3>
            <p>Elegant rooms designed for comfort and relaxation.</p>
          </div>

          <div className="featureCard">
            <h3>Fine Dining</h3>
            <p>Enjoy delicious cuisine prepared by expert chefs.</p>
          </div>

          <div className="featureCard">
            <h3>Spa & Wellness</h3>
            <p>Refresh your mind and body with premium treatments.</p>
          </div>

          <div className="featureCard">
            <h3>24/7 Service</h3>
            <p>Our dedicated team is always ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div>
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2>5000+</h2>
          <p>Happy Guests</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Luxury Rooms</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Guest Support</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide exceptional hospitality experiences that exceed guest
          expectations through comfort, luxury, and personalized service.
        </p>
      </section>

    </div>
    </>
  )
}

export default About
