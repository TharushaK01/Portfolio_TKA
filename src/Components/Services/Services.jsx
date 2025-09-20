import React from "react";
import "./Services.css";
import TargetCursor from "./TargetCursor";
import ScrollStack, { ScrollStackItem } from './ScrollStack'

const Services = () => {
  return (
    <div className="services">
      <h2>My Services</h2>


<ScrollStack>

  <ScrollStackItem>

    <h2>Card 1</h2>

    <p>This is the first card in the stack</p>

  </ScrollStackItem>

  <ScrollStackItem>

    <h2>Card 2</h2>

    <p>This is the second card in the stack</p>

  </ScrollStackItem>

  <ScrollStackItem>

    <h2>Card 3</h2>

    <p>This is the third card in the stack</p>

  </ScrollStackItem>

</ScrollStack>

      
      <div className="services-row">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Building responsive and dynamic websites using modern technologies..
          </p>
          <div className="readmore">Read More &rarr;</div>
        </div>
        <div className="service-card">
          <h3>Flyer & Banner Design </h3>
          <p>
            Design professional flyers & banner tailored to your brand and
            audience...
          </p>
          <div className="readmore">Read More &rarr;</div>
        </div>
        <div className="service-card">
          <h3>Logo Design</h3>
          <p>
            Designing modern and memorable logos that define your brand
            identity...
          </p>
          <div className="readmore">Read More &rarr;</div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievement">
          <h3>2+</h3>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>40+</h3>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>30+</h3>
          <p>Satisfied Clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Services;
