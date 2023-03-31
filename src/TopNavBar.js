import { useState } from "react";
import Arrow from "./ArrowIcon.png";
export function TopNavBar() {
  return (
    <div>
      <div className="topNavBarContainer">
        <img
          src="https://classroom.edyoda.com/static/media/edyoda_transparent_logo.55bcc00f.png"
          alt="icon"
          height="60px"
        />
        <div className="profileDiv">
          <p>Hi Test Learner!</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJ6EIhyKP6dIn9PAGXAxq8AcRXo2r4G89Ag&usqp=CAU"
            alt="profilePic"
            width="40px"
            height="40px"
            className="profilePic"
          />
        </div>
      </div>
      <CollapseDiv />
    </div>
  );
}
function CollapseDiv() {
  const [toggleOn, setToggleOn] = useState(false);
  const displayToggle1 = {
    display: toggleOn ? "flex" : "none",
  };

  const toggleButtonStyle = {
    transform: toggleOn ? "rotate(180deg)" : "rotate(0)",
  };
  return (
    <div className="collapseDiv">
      <div className="collapseTopDiv">
        <div className="collapseBlock1">
          <div>DS031221</div>
          <button
            className="toggleButton"
            onClick={() => setToggleOn(!toggleOn)}
          >
            <img
              src={Arrow}
              alt="ToggleIcon"
              width="15px"
              style={toggleButtonStyle}
            />
          </button>
        </div>
        <div>Data Scientist Program</div>
      </div>
      <div className="collapseBottomDiv" style={displayToggle1}>
        <div>Select program</div>
        <div className="buttonDiv">
          <button className="unActiveButton">ECRD</button>
          <button className="unActiveButton">FSR222222</button>
          <button className="unActiveButton">DS261121</button>
          <button
            style={{
              background: "white",
              border: "none",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            DS031221
          </button>
        </div>
      </div>
    </div>
  );
}
