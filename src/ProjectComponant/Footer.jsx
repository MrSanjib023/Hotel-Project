import React from 'react'
import img from '../assets/Logo.png';

const Footer = () => {
    return (
        <>
            <footer className='homeFooter'>
                <div className='footermain'>
                    <div className='SocialDetail'>
                        <img src={img}></img>
                        <p>Discover the world's most extraordinary places to stay, from boutique hotels to Luxary villas and private islands.</p>
                        <div className='Socialmedia'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className='Companey'>
                        <h6>COMPANEY</h6>
                        <ul>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Careers</a></li>
                            <li><a href='#'>Press</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Partners</a></li>
                        </ul>
                    </div>
                    <div className='Support'>
                        <h6>SUPPORT</h6>
                        <ul>
                            <li><a href='#'>Help Center</a></li>
                            <li><a href='#'>Safty Information</a></li>
                            <li><a href='#'>Cancellation Option</a></li>
                            <li><a href='#'>Contact us</a></li>
                            <li><a href='#'>Accessibility</a></li>
                        </ul>
                    </div>
                    <div className='updatediv'>
                        <h6>STAY UPDATE</h6>
                        <p>Subscribe to our newsletter for travels inspiration and spacial offers.</p>
                        <div>
                            <input type='email' placeholder='Enter your email' id='email_2'></input>
                            <button type="button" class="btn btn-dark subbtn_2"><i class="fa-solid fa-right-long"></i></button>
                        </div>
                    </div>
                </div><hr />
                <div className='footerdown'>
                    <div className='Copyright'>
                        <i class="fa-regular fa-copyright"></i>
                        <p>Node.js.All rights Reserved.</p>
                    </div>
                    <div className='Privacy'>
                        <ul>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Terms</a></li>
                            <li><a href='#'>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
