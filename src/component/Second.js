import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
import { Helmet } from "react-helmet";
class Second extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>This is page 2</title>
            <meta name="description" content="This is page 2, This is page 2, This is page 2, This is page 2, This is page 2,This is page 2,This is page 2." />
            <meta name="keywords" content="This is page 2, This is page 2, This is page 2, This is page 2, This is page 2,This is page 2,This is page 2." />
        </Helmet>
        <CustomNavbar />
        <div className="container">
          <h3 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                This is Second Page
          </h3>
          <h5 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          This is page 2, This is page 2, This is page 2, This is page 2, This is page 2,This is page 2,This is page 2.
          </h5>

        </div>
      </div>
    );
  }
}

export default Second;
