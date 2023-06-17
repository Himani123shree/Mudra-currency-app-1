import React from 'react';
import business from './business.jpeg';
import Layouto from './Layout/Layouto';
const AboutUs = () => {
  return (
<Layouto>
    <div className="container position-relative">
      <h2 className="text-center news-heading">About Us</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={business} alt="Money Image" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h4>Our Company</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lacinia dui. Vestibulum eget volutpat libero. Curabitur faucibus lectus sed nulla iaculis, in condimentum mauris ullamcorper. Proin aliquam ex quis nulla tempor luctus. Aenean eu nunc elit. Nunc dignissim bibendum turpis ut varius. Integer vitae lectus lectus.
          </p>
          <p>
            Nulla posuere viverra eleifend. Morbi ut leo vel est condimentum molestie. Curabitur ultricies tristique nisl, at suscipit lectus tincidunt non. Vivamus quis tellus et tortor fringilla viverra at sed tellus. Nullam facilisis mauris risus, in dignissim risus tristique et. Nunc cursus lacinia mi, vel eleifend metus varius ac.
          </p>
        </div>
      </div>
    </div>
</Layouto>
  );
};

export default AboutUs;