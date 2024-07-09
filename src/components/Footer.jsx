import React from 'react';
import logo from '../assets/logo/logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto grid gap-6 px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-xl font-semibold">KEEP IN TOUCH WITH US</h2>
          <p className="mt-2">Subscribe to our email and keep close to school</p>
        </div>
        <div className="flex justify-center">
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 border border-white p-2 rounded">
            <div className="flex flex-col">
              <label className="text-white mb-1">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <button
              type="submit"
              className="p-2 rounded bg-blue-600 hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Logo" className="w-20" />
          </div>
          <div>
            <h3 className="font-semibold">COMPANY</h3>
            <ul>
              <li>PROGRAMMES</li>
              <li>ABOUT US</li>
              <li>WALL OF FAME</li>
              <li>LOGIN</li>
              <li>GET INVOLVED</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">SCHOOL</h3>
            <ul>
              <li>SCHOOL OF DATA</li>
              <li>SCHOOL OF DEVELOPMENT</li>
              <li>SCHOOL OF MANAGEMENT</li>
              <li>SCHOOL OF DESIGN</li>
              <li>SCHOOL OF BUSSINESS AND MANAGEMENT</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">CONTACT</h3>
            <ul>
                <li><br /></li>
              <li><a href="tel:+2347038960562">(+234) 7038960562</a></li>
              <li><a href="mailto:hello@techpye.com">HELLO@TECHPYE.COM</a></li>
              <li><br /></li>
              <li>FOLLOW US 
                <a href="https://www.linkedin.com" className="ml-2"><FontAwesomeIcon icon={faLinkedin} /></a> 
                <a href="https://www.twitter.com" className="ml-2"><FontAwesomeIcon icon={faTwitter} /></a> 
                <a href="https://www.facebook.com" className="ml-2"><FontAwesomeIcon icon={faFacebook} /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <div className="mb-2 md:mb-0">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
          <div>
            <span>&copy; 2024, Techpye Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;