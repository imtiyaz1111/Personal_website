import React from "react";
import { Link } from "react-router-dom";
import "./error.css"
const Error = () => {
  return (
    <div className="error">
      <div className="errormain">
        <h1 className="text-light">404</h1>
        <h3 className="text-light">Page not found</h3>
        <p className="text-light">
          The page you are for doesn't exit or an error occourred.
        </p>
        <div class="error-btn">
          <Link to="/">
            {" "}
            <button type="button" class="btn">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
