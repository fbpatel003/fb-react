import React from "react";
import ProfilePic from "./Images/ProfilePic.jpg";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-sm homeContain">
          <div className="card">
            <img src={ProfilePic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title font-Lobster">Fenil Babariya</h3>
              <p className="card-text font-monospace">
                An Engineer graduated with Electricals' Degree, More than three
                years of experience in the industry, Involved in Team management
                and Project Management.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated on 11/10/'22</small>
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item font-monospace">
                <h5 className="font-Lobster">D.O.B. :</h5> 16th May, 1998
              </li>
              <li className="list-group-item font-monospace">
                <h5 className="font-Lobster">Loaction :</h5> Rajkot, Gujarat.
              </li>
              <li className="list-group-item font-monospace">
                <h5 className="font-Lobster">Languages :</h5>
                <ul>
                  <li>
                    English /
                    <span className="Lang">Full Professional Proficiency</span>
                  </li>
                  <li>
                    Hindi /
                    <span className="Lang">Limited Working Proficiency</span>
                  </li>
                  <li>
                    Gujarati /
                    <span className="Lang">Natiive or Bilingual Proficiency</span>
                  </li>
                </ul>
              </li>
              <li className="list-group-item font-monospace">
                <h5 className="font-Lobster">Call :</h5> (+91) 96247 29396
              </li>
              <li className="list-group-item font-monospace">
                <h5 className="font-Lobster">Email :</h5> <a href="mailto:fenilbabariya.fb@gmail.com">fenilbabariya.fb@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
