import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
class Home extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <div className="container">
          <h3 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            Playlists
          </h3>
          {["", "", "", "", ""].map((data) => {
            return (
              <div className="container">
                <div className="row" style={{ paddingTop: "3%" }}>
                  <div className="col-12 col-lg-8 col-md-12 col-sm-12">
                    <div className="row">
                      <img
                        src={require("../img/abcd.jpg")}
                        // style={{width:"15%", height: "auto"}}
                        className="img1"
                      />
                      <div className="col-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                          <div className={"col-6 col-lg-10 col-md-6 col-sm-6"}>
                            <p
                              className="p0"
                              style={{
                                fontSize: "0.8rem",
                                color: "#c7e7e2",
                                paddingTop: "5px",
                              }}
                            >
                              joeroger
                            </p>
                          </div>
                          <i
                            style={{ color: "#c0d2cf", fontSize: "20px" }}
                            class="fas fa-ellipsis-h"
                          ></i>
                        </div>
                        <p
                          style={{
                            fontWeight: "800",
                            color: "#66827e",
                            paddingTop: "5px",
                          }}
                          className="p0"
                        >
                          JRE MMA Show #75 With Dan Hardy
                        </p>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            color: "#c7e7e2",
                            paddingTop: "5px",
                          }}
                        >
                          This one is so much awesome as a lorem epsim as a
                          lorem epsim.
                        </p>
                        <div className="row" style={{ paddingTop: "2%" }}>
                          <div
                            className=" col-2 col-lg-2 col-md-2 col-sm-2"
                            style={{}}
                          >
                            <i
                              class="far fa-heart"
                              style={{ color: "#c0d2cf" }}
                            >
                              {" "}
                              28
                            </i>
                          </div>
                          <div
                            className="col-2 col-lg-2 col-md-2 col-sm-2"
                            style={{}}
                          >
                            <i
                              style={{ color: "#c0d2cf" }}
                              class="fas fa-headphones-alt"
                            >
                              {" "}
                              28
                            </i>
                          </div>
                          <div
                            className=" col-2 col-lg-2 col-md-2 col-sm-2"
                            style={{}}
                          >
                            <i
                              style={{ color: "#c0d2cf" }}
                              class="fas fa-headphones-alt"
                            ></i>
                          </div>
                          <div
                            className="show"
                            style={{
                              background: "#c0d2cf",
                              height: "3px",
                              width: "30%",
                              alignSelf: "center",
                            }}
                          >
                            {/* <div style={{width:"20px", height: "2px", background: "red"}}> */}
                            <div
                              style={{
                                width: "70%",
                                height: "inherit",
                                backgroundColor: "#50978d",
                              }}
                            ></div>
                          </div>
                          <p
                            className="show"
                            style={{ color: "#c0d2cf", paddingLeft: "2px" }}
                          >
                            70%
                          </p>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div
                    className="col-12 col-lg-8 col-md-12 col-sm-12"
                    style={{
                      height: "3px",
                      marginTop: "2%",
                      backgroundColor: "#c0d2cf",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
