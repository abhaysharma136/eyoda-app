import DataAna from "./Data-Analysis.png";
import DataWrang from "./Data Wrangling.png";

export function HomePage() {
  return (
    <>
      <div>
        <div className="rightTopDiv">
          <img src={DataAna} alt="dataScience" width="70px" />
          <div>
            <div
              style={{
                background: "#F5F5F5",
                borderRadius: "15px",
                width: "220px",
                textAlign: "center",
              }}
            >
              Cetification | Attempt 1
            </div>
            <div style={{ width: "130px" }}>DATA ANALYSIS CERTIFICATION</div>
            <div
              style={{
                background: "skyblue",
                width: "220px",
                borderRadius: "15px",
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              COMPLETED | 21 MAR 2022
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            <div>Exam Structure</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div>Round1</div>
              <div>MCQS</div>
              <div>CODING</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div>Round2</div>
              <div>PROJECT</div>
            </div>
          </div>
          <div
            style={{
              color: "skyblue",
              border: "1px solid skyblue",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            View Exam Details
          </div>
        </div>
        <h2>Continue Learning</h2>
        <div className="rightBottomDiv">
          <div className="rightBottomleftDiv">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              VIEW MODULE DETAIL
            </div>
            <div
              style={{
                display: "flex",
                background: "white",
                height: "100%",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <div style={{ height: "100%", width: "60%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    justifyContent: "center",
                  }}
                >
                  <img src={DataWrang} alt="DataWrangling" width="70px" />
                  <div>
                    <div style={{ width: "220px" }}>
                      DATA WRANGLING & VISUALISATION
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJ6EIhyKP6dIn9PAGXAxq8AcRXo2r4G89Ag&usqp=CAU"
                        alt="ProfilePic"
                        width="35px"
                      />
                      <div>Test Instructor</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "15px",
                      }}
                    >
                      <div className="progressBarContainer">
                        <div>Live Session</div>
                        <div className="progressBarDiv"></div>
                      </div>
                      <div className="progressBarContainer">
                        <div>Live Session</div>
                        <div className="progressBarDiv"></div>
                      </div>
                      <div className="progressBarContainer">
                        <div>Live Session</div>
                        <div className="progressBarDiv"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "100%", width: "40%", marginLeft: "45px" }}>
                <p>Today's Plan</p>
                <p>21 March 2022</p>
                <div>Data Transformation using Pandas-3</div>
                <div>
                  <div>daily feedback</div>
                  <div>Opens at 7:30PM</div>
                </div>
                <button
                  style={{
                    borderRadius: "25px",
                    border: "none",
                    padding: "10px",
                  }}
                >
                  Join Live Session
                </button>
              </div>
            </div>
          </div>
          <div className="rightBottomrightDiv">
            <h2>Progress Overview</h2>
            <div className="progressOverview">
              <div style={{ fontSize: "25px" }}>0%</div>
              <div style={{ fontSize: "13px", color: "gray" }}>
                Overall Grade
              </div>
            </div>
            <div className="progressOverview">
              <div style={{ fontSize: "25px" }}>0%</div>
              <div style={{ fontSize: "13px", color: "gray" }}>Attendance</div>
            </div>
            <div style={{ color: "blue", fontWeight: "700" }}>
              View Detailed Progress
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
