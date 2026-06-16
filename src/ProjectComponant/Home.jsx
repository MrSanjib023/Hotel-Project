import React from 'react';
import img from '../assets/Nodelogo.png';
import img1 from '../assets/roomImg1.png';
import img2 from '../assets/roomImg2.png';
import img3 from '../assets/roomImg3.png';
import img4 from '../assets/roomImg4.png';
import img5 from '../assets/exclusiveOfferCardImg1.png';
import img6 from '../assets/exclusiveOfferCardImg2.png';
import img7 from '../assets/exclusiveOfferCardImg3.png';
import img8 from '../assets/sanjib.jpg';
// import Footer from './Footer';

const Home = () => {
  let Chack = [
    {
      icon: '<i class="fa-light fa-location-dot"></i>',
      titel: "Destination",
      place: "Dubai"
    },
    {
      icon: '<i class="fa-light fa-calendar"></i>',
      titel: "Check in",
      date: "01/06/2026"
    },
    {
      icon: '<i class="fa-light fa-calendar"></i>',
      titel: "Check out",
      date: "02/06/2026"
    },
    {
      titel: "Guests",
      qty: 2
    }
  ];
  let hotelCard = [
    {
      image: img1,
      titel: "The Grand Resort",
      location: "Maldives",
      price: "$500",
      time: "/Night",
      rating: "4.5/5",
    },
    {
      image: img2,
      titel: "The Grand Resort",
      location: "Maldives",
      price: "$350",
      time: "/Night",
      rating: "4.6/5",
    },
    {
      image: img3,
      titel: "The Grand Resort",
      location: "Maldives",
      price: "$400",
      time: "/Night",
      rating: "4.3/5",
    },
    {
      image: img4,
      titel: "The Grand Resort",
      location: "Maldives",
      price: "$450",
      time: "/Night",
      rating: "4/5",
    },
  ];
  let Offering = [
    {
      image: img5,
      offer: "25%",
      titel: "Summer Escape Pacage",
      des: "Enjoy a complementary night and morning brackfirst",
      exDate: "Expires Aug 31",
      view: "View Details -->"
    },
    {
      image: img6,
      offer: "25%",
      titel: "Summer Escape Pacage",
      des: "Enjoy a complementary night and morning brackfirst",
      exDate: "Expires Aug 31",
      view: "View Details -->"
    },
    {
      image: img7,
      offer: "25%",
      titel: "Summer Escape Pacage",
      des: "Enjoy a complementary night and morning brackfirst",
      exDate: "Expires Aug 31",
      view: "View Details -->"
    }
  ];
  let ReviewDetails = [
    {
      image: img8,
      name: "Sanjib Maity",
      location: "Westbengal,India",
      rate: 4.5,
      para: '"This hotel is given Wonderful facilities, And value for money. Service is very beautiful. "'
    },
    {
      image: img8,
      name: "Sanjib Maity",
      location: "Westbengal,India",
      rate: 4.5,
      para: '"This hotel is given Wonderful facilities, And value for money. Service is very beautiful. "'
    },
    {
      image: img8,
      name: "Sanjib Maity",
      location: "Westbengal,India",
      rate: 4.5,
      para: '"This hotel is given Wonderful facilities, And value for money. Service is very beautiful. "'
    }
  ]


  return (
    <>
      <div className='Bodytop'>
        <div id='Bodytop_div_1'>The Ultimate Hotel Experience</div>
        <h1>Discover Your Perfect Getway Destination</h1>
        <h6 id='div1_h6'>Unparalleled Luxary and Comfort await at The Most Exclucive Hotel and Resorts, Stay Your Journey Today.</h6>
        <div id='Bodytop_div_2'>
          {Chack.map((item) => {
            return (
              <div className='checkDetails'>
                <h6>{item.titel}</h6>
                <h6 className='checkDetails_h6'>{item.place}</h6>
                <h6 className='checkDetails_h6'>{item.date}</h6>
                <h6 className='checkDetails_h6'>{item.qty}</h6>
              </div>
            )
          })}
          <div className='Search_checkout'>
            <i class="fa-solid fa-magnifying-glass search"></i>
            <h6 id='search'>Search</h6>
          </div>
        </div>
      </div>
      <div className='featured_hotel'>
        <h1 className='inline_featured'>Featured Hotel</h1>
        <h6 className='inline_featured' id='featured_hotel_h6'>Discover Our Handpick Selection of Exceptional Properties Around
          The World Offering Unparalleled Luxary and Unforgetable Experiences</h6>
        <div id='items'>
          {hotelCard.map((cards) => {
            return (
              <div class="card hotel_card">
                <img src={cards.image} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{cards.titel}</h5>
                  <h6 class="card-text"><i class="fa-solid fa-location-dot"></i>{cards.location}</h6>
                  <span>{cards.price}</span>
                  <span id='cardTime'>{cards.time}</span>
                  <div id='rating'><i class="fa-solid fa-star"></i>{cards.rating}</div>
                  <a href="#" class="btn btn-primary viewbtn">View Details</a>
                </div>
              </div>
            )
          })}
        </div>
        <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true" id='viewdetails'>View All Details</button>
      </div>
      <div className='offers_section'>
        <h1>Exclucive Offers</h1>
        <p>Take Advantage of Our Limited time offers and spacial pacages to enhance your stay and create Unforgetable memories</p>
        <div className='Offers_cards'>
          {Offering.map((cardItem) => {
            return (
              <div class="card text-bg-dark cardDiv offersCard">
                <img src={cardItem.image} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <div id='carddis'>{cardItem.offer}offer</div>
                  <h4 class="card-title">{cardItem.titel}</h4>
                  <p class="card-text">{cardItem.des}</p>
                  <p class="card-text">{cardItem.exDate}</p>
                  <button type="button" class="btn btn-outline-light">{cardItem.view}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='reviewSection'>
        <h1>What Our Guests Say</h1>
        <p>Discover why Discerning travelers Chose Quickstay For Thier Luxary Accommodations Around The World</p>
        <div className='reviewSectionDiv'>
          {ReviewDetails.map((review)=>{
            return(
              <div id='reviewDiv'>
                <div id='accountDiv'>
                  <div><img src={review.image} className='ImgDiv'/></div>
                  <h6 id='name'>{review.name}</h6>
                  <h6 id='locat'>{review.location}</h6>
                </div>
                <h5 id='rate'>{review.rate}</h5>
                <p id='para'>{review.para}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='SubscribeSection'>
        <div className='Subscribe'>
          <h1>Stay Inspired</h1>
          <p>Join our newsletter and be the first to discover new destination, exclusive offers and traveles inspiration.</p>
          <div>
            <input type='email' placeholder='Enter your email' id='email'></input>
            <button type="button" class="btn btn-dark subbtn">Subscribe</button>
          </div>
          <p>By Subscribing, to agree our privacy policy and concent to recive update.</p>
        </div>
      </div>
    </>
  )
}

export default Home
