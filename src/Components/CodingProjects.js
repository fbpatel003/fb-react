import React from "react";

class CodingProjects extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="Container-sm codingProjectContain">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button font-Lobster"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4>React Resume Website</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="badges">
                    <span className="badge rounded-pill bg-react">
                      React Js
                    </span>
                    <span className="badge rounded-pill bg-bootstrap">
                      BootStrap
                    </span>
                    <span className="badge rounded-pill bg-js">JavaScript</span>
                    <span className="badge rounded-pill bg-html">HTML</span>
                    <span className="badge rounded-pill bg-css">CSS</span>
                  </div>
                  A responsive resume Website created using React app and CSS
                  framework, JavaScript plugin is provided by BootStrap.
                  <br />
                  <a href="http://fb-react-app.herokuapp.com/" target="_blank">
                    <button type="button" class="btn btn-dark btn-sm">
                      Link
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 1792 1792"
                      >
                        <path
                          fill="#d8a353"
                          d="M1408 928V448q0-26-19-45t-45-19H864q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zm256-512v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
                          class="color000000 svgShape"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed font-Lobster"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h4>HTML Resume</h4>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="badges">
                    <span className="badge rounded-pill bg-html">HTML</span>
                    <span className="badge rounded-pill bg-css">CSS</span>
                  </div>
                  A self Resume/CV website created with HTML in VsCode, and
                  Styling is provided with CSS & Google fonts.
                  <br />
                  <a
                    href="http://fenilbabariyaresume.herokuapp.com/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-dark btn-sm">
                      Link
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 1792 1792"
                      >
                        <path
                          fill="#d8a353"
                          d="M1408 928V448q0-26-19-45t-45-19H864q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zm256-512v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
                          class="color000000 svgShape"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed font-Lobster"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h4>Hostel Management System</h4>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="badges">
                    <span className="badge rounded-pill bg-java">Java</span>
                    <span className="badge rounded-pill bg-sql">MySQL</span>
                    <span className="badge rounded-pill bg-netbeans">
                      NetBeans
                    </span>
                    <span className="badge rounded-pill bg-swing">
                      Java Swing
                    </span>
                  </div>
                  This project is simple DBMS project which is created using
                  NetBeans & MySql workbench, and the libraries used for GUI is
                  Java Swing.
                  <br />
                  <a
                    href="https://github.com/fbpatel003/Hostel-Management-System"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-dark btn-sm">
                      Link
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 1792 1792"
                      >
                        <path
                          fill="#d8a353"
                          d="M1408 928V448q0-26-19-45t-45-19H864q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zm256-512v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
                          class="color000000 svgShape"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed font-Lobster"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <h4>Calculator With DarkMode</h4>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="badges">
                    <span className="badge rounded-pill bg-java">Java</span>
                    <span className="badge rounded-pill bg-swing">
                      Java Swing
                    </span>
                  </div>
                  This is a Simple Calculator with 32 buttons created using
                  VsCode and which has unique feature of Dark Mode. the
                  libraries used for GUI is Java Swing.
                  <br />
                  <a
                    href="https://github.com/fbpatel003/Calculator-With-Dark-Mode"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-dark btn-sm">
                      Link
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 1792 1792"
                      >
                        <path
                          fill="#d8a353"
                          d="M1408 928V448q0-26-19-45t-45-19H864q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zm256-512v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
                          class="color000000 svgShape"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed font-Lobster"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <h4>Java Pong Game</h4>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="badges">
                    <span className="badge rounded-pill bg-java">Java</span>
                    <span className="badge rounded-pill bg-swing">
                      Java Swing
                    </span>
                  </div>
                  it is a simple game of Pong, which is played with two players
                  on a single computer and there is a score count of both the
                  players.
                  <br />
                  <a
                    href="https://github.com/fbpatel003/PONG-GAME-JAVA"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-dark btn-sm">
                      Link
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 1792 1792"
                      >
                        <path
                          fill="#d8a353"
                          d="M1408 928V448q0-26-19-45t-45-19H864q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zm256-512v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
                          class="color000000 svgShape"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CodingProjects;
