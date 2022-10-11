import React from "react";

class Education extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="EduContain">
          <div className="list-group">
            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 font-Lobster">
                  AccioJob Full Stack Development Course
                </h5>
                <small>March 2022 - pursuing</small>
              </div>
              <p className="mb-1">AccioJob Pvt. Ltd.</p>
            </div>

            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 font-Lobster">
                  Electrical Engineering (B.E.)
                </h5>
                <small className="text-muted">Aug 2015 - March 2019</small>
              </div>
              <p className="mb-1">V.V.P. Engineering College, Rajkot</p>
              <span className="badge rounded-pill text-bg-primary">
                CPI-7.7 || CGPA-7.7
              </span>
            </div>

            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 font-Lobster">Class 12 <sup>th</sup> </h5>
                <small className="text-muted">June 2014 - March 2015</small>
              </div>
              <p className="mb-1">Shree P.V. Modi School, Jamnagar.</p>
              <span className="badge rounded-pill text-bg-primary">
                64.13%
              </span>
            </div>

            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 font-Lobster">Class 10 <sup>th</sup> </h5>
                <small className="text-muted">June 2014 - March 2015</small>
              </div>
              <p className="mb-1">Shree P.V. Modi School, Jamnagar.</p>
              <span className="badge rounded-pill text-bg-primary">
                86.83%
              </span>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Education;
