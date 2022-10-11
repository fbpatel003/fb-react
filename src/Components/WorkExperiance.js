import React from "react";

class WorkExperiance extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="WorkContain">
          <div className="list-group">
            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 font-Lobster">
                  Business Devlopement Officer
                </h5>
                <small>Jan 2021 - present</small>
              </div>
              <p className="mb-1">
                <strong> Speedwell Abrasive Pvt. Ltd. </strong>
              </p>
              <p>
                <ul>
                  <li>
                    Creating a Dealer/distributers network of Abrasive wheel
                    across the India, and selling Abrasive items/products.
                  </li>
                  <li>
                    Managing two field marketing executives which are located in
                    East zone of India.
                  </li>
                </ul>
              </p>
            </div>

            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 font-Lobster">
                  Sales & Marketing Executive
                </h5>
                <small>June 2019 - Jan 2021</small>
              </div>
              <p className="mb-1">
                <strong> Maheer Technologies </strong>
              </p>
              <p>
                <ul>
                  <li>
                    Selling of CNC Router Machine (Wood & Stone Carving), CNC
                    Pattern making Machine & 3 Axes Machine to end users across
                    the India.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WorkExperiance;
