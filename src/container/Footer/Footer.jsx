import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Sonegaon, Nagpur, Maharashtra</p>
        <p className="p__opensans">+91 7770087474</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.cuisine} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiGithub />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">11:00 Am - 12:00 Am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">09:00 Am - 1:00 Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">©2023 CUISINE. All Rights Reserve</p>
    </div>

  </div>
);

export default Footer;
