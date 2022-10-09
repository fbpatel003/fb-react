import "./App.css";
import Home from "./Components/Home";
import { useState } from "react";
import SoftSkills from "./Components/SoftSkills";
import CodingProjects from "./Components/CodingProjects";
import Education from "./Components/Education";
import WorkExperiance from "./Components/WorkExperiance";
import NavBottom from "./Components/NavBottom";

function App() {
  const [showBody, setBody] = useState("Home");
  return (
    <>
    
      <nav className="navbar navbar-custom navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand font-Lobster" href="#">
            {showBody}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page" onClick={()=>setBody("Home") }>
                Home
              </a>
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={()=>setBody("Soft Skills")}>
                Soft Skills
              </a>
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={()=>setBody("Coding Projects")}>
                Coding Projects
              </a>
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={()=>setBody("Education")}>
                Education
              </a>
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={()=>setBody("Work Experiance")}>
                Work Experiance
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showBody=="Home"? <Home/> : null}
      {showBody=="Soft Skills"? <SoftSkills/> : null}
      {showBody=="Coding Projects"? <CodingProjects/> : null}
      {showBody=="Education"? <Education/> : null}
      {showBody=="Work Experiance"? <WorkExperiance/> : null}
    
      <NavBottom/>
    </>
  );
}

export default App;
