import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import $ from "jquery/";
import "malihu-custom-scrollbar-plugin/";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "jquery-mousewheel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headphonesAlt } from "@fortawesome/free-solid-svg-icons";

class CustomNavbar extends Component {
  componentDidMount() {
    $(window).on("load", function () {
      $(".mega_menu_two .scroll").mCustomScrollbar({
        mouseWheelPixels: 50,
        scrollInertia: 0,
      });
    });
  }
  render() {
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed" style={{}}>
        <nav
          className="navbar navbar-expand-lg navbar-light show"
          style={{ padding: "inherit", backgroundColor: "#c7e7e2" }}
        >
          <div className="container">
            <Link className={`navbar-brand`} to="/second">
              jifcast
            </Link>

            <div class="collapse navbar-collapse">
              <ul className={`navbar-nav ml-auto`}>
                <li className="nav-brand">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "4px 20px 2px 20px",
                    }}
                  >
                    <i class="fas fa-sync-alt" style={{ fontSize: "30px" }}></i>
                    {/* <Link
                      to="/amazon"
                      className="nav-link"
                      role="button"
                      style={{ padding: "inherit", fontSize: "0.8rem" }}
                    >
                      refresh
                    </Link> */}
                     <a 
                    href="https://google.com"
                    
                    style={{ padding: "inherit",fontSize: "0.8rem",color: "#5c6b69" }}
                    >
                        
                      refresh
                     </a> 
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "4px 20px 2px 20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i
                      class="fas fa-microphone-alt"
                      style={{ fontSize: "30px" }}
                    ></i>
                    <a 
                    href="https://amazon.com"
                    
                    style={{ padding: "inherit",fontSize: "0.8rem",color: "#5c6b69" }}
                    >
                        
                      discover
                     </a> 
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "4px 20px 2px 20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    <i
                      class="fas fa-headphones-alt"
                      style={{ fontSize: "30px" }}
                    ></i>
                    <a 
                    href="https://yahoo.com"
                    
                    style={{ padding: "inherit",fontSize: "0.8rem",color: "#5c6b69" }}
                    >
                      notifications
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "4px 20px 2px 20px",
                      fontSize: "0.8rem",
                    }}
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                      class="rounded-circle z-depth-0"
                      alt="avatar image"
                      height="35"
                    ></img>
                    <Link
                      to="./"
                      className="nav-link"
                      role="button"
                      style={{ padding: "inherit" }}
                    >
                      username
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav
          className="navbar navbar-expand-lg navbar-light show1"
          style={{ padding: "inherit", backgroundColor: "white" }}
        >
          <div
            className="navbar-header border-bottom border-dark"
            style={{ backgroundColor: "white" }}
          >
            {/* <div class="navbar-header"> */}
            {/* <div className="container"> */}
            <Link
              className={`navbar-brand`}
              style={{
                fontSize: "1.1rem",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "54px",
              }}
              to="/"
            >
              Downloads
            </Link>
            {/* </div>     */}
            <i
              class="fas fa-headphones-alt"
              style={{
                fontSize: "20px",
                float: "right",
                paddingTop: "15px",
                paddingRight: "13px",
              }}
            ></i>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default CustomNavbar;
