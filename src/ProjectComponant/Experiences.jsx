import React from 'react'
import image1 from '../assets/expRoom1.jpeg';
import image2 from '../assets/expRoom2.jpeg';
import image3 from '../assets/expRoom3.jpeg';
import image4 from '../assets/expRoom4.jpeg';
import image5 from '../assets/expRoom5.jpeg';
import image6 from '../assets/expRoom6.jpeg';

const Experiences = () => {
  return (
    <>
      <div className="experiences">

      {/* Hero Section */}
      <section className="expHero">
        <h1>Unforgettable Experiences</h1>
        <p>
          Discover unique moments, luxury adventures, and memorable stays.
        </p>
      </section>

      {/* Experience Cards */}
      <section className="expContainer">

        <div className="expCard">
          <img src={image1} alt="Spa" />
          <h2>Luxury Spa</h2>
          <p>
            Relax with premium spa treatments designed for complete wellness.
          </p>
        </div>

        <div className="expCard">
          <img src={image2} alt="Dining" />
          <h2>Fine Dining</h2>
          <p>
            Enjoy world-class cuisine prepared by award-winning chefs.
          </p>
        </div>

        <div className="expCard">
          <img src={image3} alt="Pool" />
          <h2>Infinity Pool</h2>
          <p>
            Experience breathtaking views while relaxing by our pool.
          </p>
        </div>

        <div className="expCard">
          <img src={image4} alt="Adventure" />
          <h2>Adventure Tours</h2>
          <p>
            Explore local attractions and exciting outdoor activities.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="expCTA">
        <h2>Create Your Perfect Stay</h2>
        <p>Book now and enjoy unforgettable experiences with us.</p>
        <button>Book Experience</button>
      </section>

    </div>
    </>
  )
}

export default Experiences
