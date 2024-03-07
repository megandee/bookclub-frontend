import React from "react";
import "./Home.scss";
import childReading from "../../../src/images/childReading.jpg";
import littleLibrary from "../../../src/images/littleLibrary.jpg";
import kidHiking from "../../../src/images/kidHiking.jpg";
import stamps from "../../../src/images/stamps.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="cta">
        <div className="left">
          <img src={childReading} alt="child reading books" className="hero" />
        </div>
        <div className="right">
          <h2>Brief description of the app and our mission</h2>
        </div>
      </div>
      <div className="features">
        <div className="feature">
            <img src={littleLibrary} alt="feature 1" />
            <p>Description of feature 1</p>
            <button>Learn More</button>
          </div>
          <div className="feature">
            <img src={kidHiking} alt="feature 2" />
            <p>Description of feature 2</p>
            <button>Learn More</button>
          </div>
          <div className="feature">
            <img src={stamps} alt="feature 3" />
            <p>Description of feature 3</p>
            <button>Learn More</button>
          </div>
      </div>
      <div className="mission">
        <div className="left">
          <h2>More detailed description of the apps features and inspiration</h2>
        </div>
        <div className="right">
          <img src={childReading} alt="child reading" /> 
        </div>
      </div>
      <div className="club-container">
        <h1>Join a Club!</h1>
      <div className="clubs">
          <div className="club">
            <img src={childReading} alt="child reading" />
            <h2>Club Name</h2>
            <p>Club description</p>
            <button>Join</button>
          </div>
          <div className="club">
            <img src={childReading} alt="child reading" />
            <h2>Club Name</h2>
            <p>Club description</p>
            <button>Join</button>
          </div>
          <div className="club">
            <img src={childReading} alt="child reading" />
            <h2>Club Name</h2>
            <p>Club description</p>
            <button>Join</button>
          </div>
          <div className="club">
            <img src={childReading} alt="child reading" />
            <h2>Club Name</h2>
            <p>Club description</p>
            <button>Join</button>
          </div>
      </div>
      </div>
    </div>
  );
}   

export default Home;   
