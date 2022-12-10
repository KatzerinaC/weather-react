import React from "react";
import "./App.css";
// eslint-disable-next-line
export default function () {
  return (
    <div className="Search">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city..."
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary shadow-sm w-100 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
