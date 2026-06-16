import React, { useEffect, useState } from 'react'
import whiteLogo from '../assets/Logo.png';
import blackLogo from '../assets/logoblack.png'
import { NavLink, useLocation } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`Navbar ${location.pathname === "/"
                ? scrolled
                    ? "navbarScrolled"
                    : "navbarHome"
                : "otherNavbar"
                }`}>
                <div className='Project_Logo'>
                    <div id='Logo'>
                        <img src={
                            location.pathname === "/"
                                ? (scrolled ? blackLogo : whiteLogo)
                                : blackLogo
                        }
                            alt="logo"></img>
                    </div>
                </div>
                <div className='DetailSection'>
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Hotels' className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>Hotels</NavLink>

                        </li>
                        <li>
                            <NavLink to='/Experiences' className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>Experiences</NavLink>
                        </li>
                        <li>
                            <NavLink to='/About' className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>About</NavLink>

                        </li>
                    </ul>
                </div>
                <div className='Login_Section'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-user"></i>
                    <button type="button" class="btn btn-dark login" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Login
                    </button>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div className='paneldiv'>
                            <div className='col-6 loginPannel'>
                                <h3>User Login</h3>
                                <h6>Secure Login System</h6>
                            </div>
                            <div className='col-6 loginPage'>
                                <h4>Login Account</h4>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" required></input>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required></input>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary logbtn">Login</button>
                                    <div className='registration_section'>
                                        <h6>If you are new click here<button type="button" class="btn registration" data-bs-toggle="modal" data-bs-target="#registrationModal">Sign up</button></h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="registrationModal" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modalRegi">
                    <div class="modal-content">
                        <div className='paneldiv'>
                            <div className='col-8 RegistrationSec'>
                                <h4>Registration</h4><hr></hr>
                                <form>
                                    <div class="mb-3 formReg">
                                        <label for="exampleInputName" class="form-label">Name<sup>*</sup></label>
                                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" required></input>
                                    </div>
                                    <div class="mb-3 formReg">
                                        <label for="exampleInputNumber" class="form-label">Number<sup>*</sup></label>
                                        <input type="tel" class="form-control" id="exampleInputNumber" aria-describedby="emailHelp" maxLength={10} required></input>
                                    </div>
                                    <div class="mb-3 formReg">
                                        <label for="exampleInputEmail1" class="form-label">Email address<sup>*</sup></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                                    </div>
                                    <div class="mb-3 formReg">
                                        <label for="exampleInputPassword1" class="form-label">Create Password<sup>*</sup></label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" required></input>
                                    </div>
                                    <button type="submit" class="btn btn-primary signbtn">Sign in</button>
                                    <div className='log_section'>
                                        <h6>Already have an account ?<button type="button" class="btn login" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Login
                                        </button></h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
