import React from "react";
import { NavLink } from "react-router-dom";
import Office from "../Images/shutterstock_696636415.jpg";

const Learn = () => {
  return (
    <div className="learn-container">
      <div className="leran-items">
        <div className="columns content">
          <div className="content-container">
            <h3>Justo petentium te vix, scripta regione urbanitas</h3>
            <p>
              Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam
              quodsi aliquam eligendi ne. Ferry euismod accusata te nec, summo
              accumsan at vix. Ad vix slight impetus, nam consequat reformidans
              ut. No sit consul integre voluptatibus, omnium lucilius ne mel. Et
              ancillae recteque deterruisset sed, ea nec odio option, ferri
              assum eum et.
            </p>

            <NavLink className="colums btn-nav" to="/about-us">
              Learn more
            </NavLink>
          </div>
        </div>
        <div className="columns image">
          <img src={Office} style={{ width: "70%" }} alt="office" />
        </div>
      </div>
    </div>
  );
};

export default Learn;
