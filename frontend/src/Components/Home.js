import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "http://localhost:7000";
  return (
    <div>
      <div>
        <a href="/login">
          <img
            style={{ width: "100%" }}
            src={url + "/assets/background-features.jpg"}
            alt=""
          />
        </a>
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
