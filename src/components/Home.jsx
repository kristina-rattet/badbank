import { useState } from "react";
import AboutPopUp from "./popups/AboutPopUp";

const Home = () => {
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">Welcome to Bad Bank</h5>
          <img src="/images/piggybank.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              What good is a relationship if you can't have trust? At Bad Bank, we believe in the honor system. 
              And we believe in you. That's why we will never violiate yur trust and will
              <span className="bad-policy-practice">NEVER</span> secure your data.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        <button onClick={toggleAboutPopUp} className="btn btn-primary">
          Learn About Bad Bank
        </button>
      </div>

      {isAboutPopUp && <AboutPopUp handleClose={toggleAboutPopUp} />}
    </>
  );
};

export default Home;
