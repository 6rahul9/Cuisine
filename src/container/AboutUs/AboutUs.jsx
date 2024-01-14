import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The Endeavor Of CUSINE Restaurant Started With The Mission Of Providing An Inspired Multi Cuisine Restaurant To The Viander Citizens Of Nagpur. We Wanted To Give All The Palaticians An Unmatched Culinary Experience And An Unrivaled Hospitality. With CUSINE Restaurant We Have Planted A Top Fine Restaurant.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">`&quot;` In This City That Keeps Growing While Staying Grounded To It is Roots Of Exquisiteness And Service. `&quot;`</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
