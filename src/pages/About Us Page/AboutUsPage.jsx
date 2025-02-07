import { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Navbar from "../../components/Navbar";
import WebLogo from "../../assets/CampusChimePurple.png";
import "../About Us Page/AboutUsDesign.css";
import Lorenz from "../../assets/developers/Lorenz.jpg";
import Jaden from "../../assets/developers/Jaden.jpg";

class AboutUsPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Navbar />

        <div style={{ padding: "7%", color: "white" }}>
          <h1 style={{ borderBottom: "2px solid grey", width: "1050px" }}>
            Chiming in with Student Entrepreneurial Opportunities
          </h1>

          <h3>
            CampusChime is a platform designed specifically for college
            students, particularly those enrolled at the University of San
            Carlos in the Philippines. Its main objective is to provide these
            students with an avenue to showcase their entrepreneurial ideas and
            turn them into tangible products or services. The platform serves as
            a centralized marketplace that allows students to connect with
            clients, collaborate with other entrepreneurs, and promote their
            goods and services!
          </h3>

          <h1>
            Developers of{" "}
            <img
              src={WebLogo}
              alt=""
              style={{ height: "120px", width: "120px" }}
            />{" "}
            CampusChime
          </h1>
          <ul className="developersList">
            <li style={{ marginLeft: "10px", marginRight: "10px" }}>
              <img
                src={Lorenz}
                alt=""
                style={{ height: "240px", width: "240px" }}
              />
              <br />
              <h6 style={{ textAlign: "center" }}>
                Suico, Lorenz Gil G. (BSIT){" "}
              </h6>
            </li>
            <li style={{ marginLeft: "10px", marginRight: "10px" }}>
              <img
                src="https://static1.s123-cdn-static-a.com/uploads/7237226/2000_639e8801751ed_filter_639e881747b30.jpg"
                alt=""
                style={{
                  height: "240px",
                  width: "240px",
                  objectFit: "cover", // or 'none'
                }}
              />
              <br />
              <h6 style={{ textAlign: "center" }}>
                Cabogoy, Zyguel Philip E. (BSIT){" "}
              </h6>
            </li>

            <li style={{ marginLeft: "10px", marginRight: "10px" }}>
              <img
                src={Jaden}
                alt=""
                style={{ height: "240px", width: "240px" }}
              />
              <br />
              <h6 style={{ textAlign: "center" }}>Ceniza, Jaden P. (BSIT) </h6>
            </li>

            <li style={{ marginLeft: "10px", marginRight: "10px" }}>Maria</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
