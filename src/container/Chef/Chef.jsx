import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">A Variety Of Savory Recipes Curated From My Favorite Food & Cooking Sites Online.</p>
        </div>
        <p className="p__opensans">  Discover Easy Dinner Recipes, Delicious Appetizers, Soup Recipes, Comfort Food Casseroles And More. Find More Recipes Here. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kunal Kapur</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
