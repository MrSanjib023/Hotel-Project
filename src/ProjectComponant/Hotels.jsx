import React from 'react'
import img1 from '../assets/roomImg1.png';
import img2 from '../assets/roomImg2.png';
import img3 from '../assets/roomImg3.png';
import img4 from '../assets/roomImg4.png';

const Hotels = () => {
  const hotelsBook = [
    {
      image: img1,
      location: "New yourk",
      title: "Urbanza Suites",
      rating: "400 + reviews",
      address: "Main road 123 street, 23 colony",
      facilities1: "Room Service",
      facilities2: "Mountain view",
      facilities3: "Pool access",
      price: 290

    },
    {
      image: img2,
      location: "New yourk",
      title: "Urbanza Suites",
      rating: "400 + reviews",
      address: "Main road 123 street, 23 colony",
      facilities1: "Room Service",
      facilities2: "Mountain view",
      facilities3: "Pool access",
      price: 240

    },
    {
      image: img3,
      location: "New yourk",
      title: "Urbanza Suites",
      rating: "400 + reviews",
      address: "Main road 123 street, 23 colony",
      facilities1: "Room Service",
      facilities2: "Mountain view",
      facilities3: "Pool access",
      price: 250

    },
    {
      image: img4,
      location: "New yourk",
      title: "Urbanza Suites",
      rating: "400 + reviews",
      address: "Main road 123 street, 23 colony",
      facilities1: "Room Service",
      facilities2: "Mountain view",
      facilities3: "Pool access",
      price: 250

    }
  ]
  return (
    <>
      <div id='hotelMain'>
        <h1 id='hotelmain_h1'>Hotel Rooms</h1>
        <p id='hotelmainparra'>Take advantage of our limited time offers and spacial pacages to enhance your stay and create unforgetable memories.</p>
        <div className='hotelMain'>
          <div className='hotelLeft'>
            {hotelsBook.map((room) => {
              return (
                <div className="leftcard mb-3" style={{ maxWidth: "600px", border: "none", marginBottom: "50px" }}>
                  <div className="row g-4 ">
                    <div className="col-md-6 roomImage">
                      <img src={room.image} className="img-fluid rounded-start roomImage" />
                    </div>
                    <div className="col-md-6 cardRight">
                      <div className="card-body">
                        <h5 className="card-title">{room.location}</h5>
                        <h4 className="card-text">{room.title}</h4>
                        <p className="card-text"><small className="text-body-secondary"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>{room.rating}</small></p>
                        <p>{room.address}</p>
                        <div id='facility'>
                          <div className='facility'>{room.facilities1}</div>
                          <div className='facility'>{room.facilities2}</div>
                          <div className='facility'>{room.facilities3}</div>
                        </div>
                        <div id='roomPrice'>
                          <h4>${room.price} <span>/Night</span></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <br/>
                </div>
              )
            })}
          </div>
          <div className='hotelRight'>
            <div className='hotel_right_top'>
              <h6>FILTERS</h6>
              <p>CLEAR</p>
            </div>
            <div className='hotel_right_main'>
              <h6>Popular Filters</h6>
              <div>
                <label><input type='checkbox'/> Single Bad</label>
                <label><input type='checkbox'/> Double Bade</label>
                <label><input type='checkbox'/> Luxary Room</label>
                <label><input type='checkbox'/> Family Suite</label>
              </div><br></br>
              <h6>Price Range</h6>
              <div>
                <label><input type='checkbox'/> $ 0 to 500</label>
                <label><input type='checkbox'/> $ 501 to 1000</label>
                <label><input type='checkbox'/> $ 1001 to 2000</label>
                <label><input type='checkbox'/> $ 2001 to 3000</label>
              </div><br></br>
              <h6>Sort by</h6>
              <div>
                <label><input type='checkbox'/> Price Low to high</label>
                <label><input type='checkbox'/> Price High to low</label>
                <label><input type='checkbox'/> Newest Price</label>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotels
