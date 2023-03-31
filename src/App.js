import "./App.css";
import { TopNavBar } from "./TopNavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Instructors } from "./Instructors";
import Calendar from "./calendar.svg";
import ClockIcon from "./clock-blue.svg";
import Topic from "./topic.svg";
import ActiveTopic from "./activeTopic.svg";
import ActiveQuiz from "./activeModuleQuiz.svg";
import Quiz from "./moduleQuiz.svg";
import ActtiveAss from "./activeAssignment.svg";
import Assignment from "./assignment.svg";

function App() {
  return (
    <div className="App">
      <TopNavBar />

      <MiddleContent />
    </div>
  );
}

export default App;

function MiddleContent() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const currentMenu = {
    background: "aliceblue",
    color: "#000080",
  };
  const nonActiveMenu = {
    cursor: "pointer",
  };
  return (
    <div className="middleContentContainer">
      <div className="leftDiv">
        <div
          onClick={() => navigate("/")}
          style={location.pathname === "/" ? currentMenu : nonActiveMenu}
        >
          HOME
        </div>
        <div
          onClick={() => navigate("/modules/1")}
          style={
            location.pathname === "/modules/1" ||
            location.pathname === "/modules/2" ||
            location.pathname === "/modules/3"
              ? currentMenu
              : nonActiveMenu
          }
        >
          MODULES
        </div>
        <div
          onClick={() => navigate("/instructors")}
          style={
            location.pathname === "/instructors" ? currentMenu : nonActiveMenu
          }
        >
          INSTRUCTORS
        </div>
      </div>
      <div className="rightDiv">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules/1" element={<Modules />} />
          <Route path="/modules/2" element={<QuizPage />} />
          <Route path="/modules/3" element={<Assignments />} />
          <Route path="/instructors" element={<Instructors />} />
        </Routes>
      </div>
    </div>
  );
}

function Modules() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="moduleContainer">
      <div className="moduleLinks">
        <div className="moduleButtonDiv" onClick={() => navigate("/modules/1")}>
          <img
            src={location.pathname === "/modules/1" ? ActiveTopic : Topic}
            alt="topicIcon"
          />
          <div>Python Loops</div>
        </div>
        <div className="moduleButtonDiv" onClick={() => navigate("/modules/2")}>
          <img
            src={location.pathname === "/modules/2" ? ActiveQuiz : Quiz}
            alt="topicIcon"
          />
          <div>Quiz1: Data Types</div>
        </div>
        <div
          style={{ height: "60px", padding: "10px 18px" }}
          onClick={() => navigate("/modules/3")}
        >
          <div style={{ display: "flex" }}>
            <img
              src={location.pathname === "/modules/3" ? ActtiveAss : Assignment}
              alt="topicIcon"
            />
            <div>Assignment-1:</div>
          </div>
          <div>Opertors|Loops</div>
        </div>
      </div>
      <div className="moduleContentDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <div
            style={{
              width: "800px",
              height: "100px",
            }}
          >
            <div style={{ fontWeight: "800" }}>Python Loops</div>
            <div>15 December 2021, Wednesday, 07:30 PM</div>
          </div>
          <div
            style={{
              width: "800px",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "700",
              color: "blue",
            }}
          >
            Daily Feedback
          </div>
          <div
            style={{
              width: "800px",
              height: "300px",
              background: "white",
            }}
          >
            <div
              style={{
                height: "20px",
                background: "white",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  marginLeft: "10px",
                  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                }}
              >
                Session Plan
              </div>
              <div>Pre-Watch vedios</div>
              <div>Session Recordings</div>
              <div style={{ marginRight: "10px" }}>References</div>
            </div>
            <div
              style={{
                paddingLeft: "55px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                paddingTop: "10px",
              }}
            >
              <div>Session Plan</div>
              <div>Live Session is about to start Please Stay tuned</div>
              <button
                style={{
                  borderRadius: "25px",
                  border: "none",
                  padding: "5px 10px",
                }}
              >
                Join Live Session
              </button>
              <div>
                <p>Sub-Topics</p>
                <p>1. Sorting and indexing Dataframe</p>
                <p>2. Filtering DataFrame</p>
                <p>3. Using of loc and iloc functions</p>
              </div>
              <div>Session Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="moduleContainer">
      <div className="moduleLinks">
        <div className="moduleButtonDiv" onClick={() => navigate("/modules/1")}>
          <img
            src={location.pathname === "/modules/1" ? ActiveTopic : Topic}
            alt="topicIcon"
          />
          <div>Python Loops</div>
        </div>
        <div className="moduleButtonDiv" onClick={() => navigate("/modules/2")}>
          <img
            src={location.pathname === "/modules/2" ? ActiveQuiz : Quiz}
            alt="topicIcon"
          />
          <div>Quiz1: Data Types</div>
        </div>
        <div
          style={{ height: "60px", padding: "10px 18px" }}
          onClick={() => navigate("/modules/3")}
        >
          <div style={{ display: "flex" }}>
            <img
              src={location.pathname === "/modules/3" ? ActtiveAss : Assignment}
              alt="topicIcon"
            />
            <div>Assignment-1:</div>
          </div>
          <div>Opertors|Loops</div>
        </div>
      </div>
      <div className="moduleContentDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            gap: "20px",
          }}
        >
          <div style={{ width: "800px" }}>
            <div style={{ fontWeight: "700", fontSize: "21px" }}>
              Quiz1:DtaType
            </div>
            <div style={{ fontSize: "14px", color: "gray" }}>
              16 December 2021, Thursday
            </div>
          </div>
          <div style={{ width: "800px", fontWeight: "700" }}>Quiz Details</div>
          <div
            style={{
              width: "800px",
              height: "120px",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <div>10</div>
              <div>Questions</div>
            </div>
            <div>
              <div>-</div>
              <div>Duration</div>
            </div>
            <div>
              <div>125</div>
              <div>Total Score</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                borderLeft: "1px solid blue",
                paddingLeft: "70px",
              }}
            >
              <div>Start:</div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={Calendar} alt="calenderIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>16 Dec 2021</div>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={ClockIcon} alt="clockIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>07:30 PM</div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div>Due:</div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={Calendar} alt="calenderIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>19 Dec 2021</div>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={ClockIcon} alt="clockIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>11:59 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Assignments() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="moduleContainer">
      <div className="moduleLinks">
        <div className="moduleButtonDiv" onClick={() => navigate("/modules/1")}>
          <img
            src={location.pathname === "/modules/1" ? ActiveTopic : Topic}
            alt="topicIcon"
          />
          <div>Python Loops</div>
        </div>
        <div className="moduleButtonDiv" onClick={() => navigate("/modules/2")}>
          <img
            src={location.pathname === "/modules/2" ? ActiveQuiz : Quiz}
            alt="topicIcon"
          />
          <div>Quiz1: Data Types</div>
        </div>
        <div
          style={{ height: "60px", padding: "10px 18px" }}
          onClick={() => navigate("/modules/3")}
        >
          <div style={{ display: "flex" }}>
            <img
              src={location.pathname === "/modules/3" ? ActtiveAss : Assignment}
              alt="topicIcon"
            />
            <div>Assignment-1:</div>
          </div>
          <div>Opertors|Loops</div>
        </div>
      </div>
      <div className="moduleContentDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "800px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: "700", fontSize: "21px" }}>
                Assignment-1 : Operators | Loops
              </div>
              <div style={{ fontSize: "14px", color: "gray" }}>
                20 December 2021
              </div>
            </div>
            <div style={{ display: "flex", gap: "15px", textAlign: "end" }}>
              <div>
                <div style={{ fontWeight: "600" }}>3</div>
                <div>Problems</div>
              </div>
              <div>
                <div style={{ fontWeight: "600" }}> 100</div>
                <div>Total Score</div>
              </div>
            </div>
          </div>
          <div style={{ width: "800px", fontWeight: "700" }}>Quiz Details</div>
          <div
            style={{
              width: "800px",
              height: "120px",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <div>3</div>
              <div>Problems</div>
            </div>

            <div>
              <div>100</div>
              <div>Total Score</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                borderLeft: "1px solid blue",
                paddingLeft: "70px",
              }}
            >
              <div>Start:</div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={Calendar} alt="calenderIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>20 Dec 2021</div>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={ClockIcon} alt="clockIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>07:30 PM</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div>Due:</div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={Calendar} alt="calenderIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>26 Dec 2021</div>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={ClockIcon} alt="clockIcon" width="15px" />
                <div style={{ fontSize: "12px" }}>11:59 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
