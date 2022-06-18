import React from "react";
import Navbar from "./Navbar";
import pic from "../Images/shutterstock_696636415.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-items">
        <h4>About US</h4>
        <p>
          We set out to be the best at what we do and have built AVAMAE around a
          team of specialists. Our main focus is on being experts in Microsoft
          technologies; from complete adoption of the Microsoft Azure Cloud
          services platform to host and support our software, to the use of
          Microsoft .NET Core to enable us to build highly scalable
          micro-service based software architecture.
        </p>
        <p>
          Our strengths lie in user experience design and software engineering
          projects from inception to completion. We are able to work to a fixed
          budget, but feel you can get the most out of us by using our
          supportive long-term Managed Services contracts. We also provide
          software consultancy, should you require our expertise without needing
          us to create software for you. We’re passionate about creating sleek
          information architecture, custom integrations that automate processes
          and intuitive user experience.
        </p>
        <img src={pic} alt="office" />
        <p>
          AVAMAE is the brainchild of Oliver Pluckrose. Company Founder and
          Solutions Architect, he has always been fascinated by how things work.
          He has built his career around the philosophy that systems can be
          optimized and processes made much more efficient by using intelligent
          coding and automation.
        </p>
        <p>
          Oliver has worked in the industry for over two decades and has been
          involved in over 200 software engineering projects. In that time, he
          has built up vast expertise in Microsoft Technologies and is a
          specialist in Azure products, as well as AI, cognitive services and
          machine learning. Since starting out as a developer, Oliver has
          shifted his focus to system architecture and overseeing development
          projects at AVAMAE. Personally, he also has a keen interest in micro
          service technologies with message and event-driven architecture.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
