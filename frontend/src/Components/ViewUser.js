import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const url = "http://localhost:7000";
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getModelById = () => {
    setLoading(true);
    fetch(url + "/user/getbyid/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setModelData(data);
        setLoading(false);
        
      });
  };

  useEffect(() => {
    getModelById();
  }, []);

  const displayModelData = () => {
    console.log(loading);
    if (!loading && modelData) {
      return (
        <div className="animate__animated animate__bounce"
          style={{
            background:
              "linear-gradient(to top, #ffffff00,#64a5ad, #ffffff00,#64a5ad)",
          }}
        >
          <div className="container">
            <div className="row " style={{ padding: "3rem" }}>
              {/* <div className="col-md-12"> */}
              <div className="card bg-">
                {/* <div className="card-body">{showModel(modelData.file)} */}
                </div>
                {/* </div> */}

                <div style={{ padding: "2rem", marginTop: "-3%" }}>
                  <h2
                    className="card-title"
                    style={{ fontWeight: "bold", fontSize: "50px" }}
                  >
                    {" "}
                    {modelData.email}
                  </h2>
                  <h5>3D Model</h5>
                  <p className="card-text" >
                    <b>Created At:</b> {modelData.createdAt}
                  </p>
                 
                  <h5
                    style={{
                      float: "right",
                      marginTop: "-7%",
                      fontWeight: "bold",
                    }}
                    className="card-text"
                  >
                    Uploaded BY : {modelData.username}
                  </h5>
                  <hr />
                </div>
                
                    {/* <div className="col-md">
            <p className="card-text"><b>Material :</b> {modelData.materials}</p>
            </div> */}
                    <div className="col-md">
                      <p className="card-text">
                        <b>Material :</b> {modelData.password}
                      </p>
                    </div>
                    <div className="col-md">
                      <p className="card-text">
                        <b>Textures :</b> {modelData.email}
                      </p>
                    </div>

                    <div className="col-md">
                      <p className="card-text">
                        <b>Size :</b> {modelData.username}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <p className="card-text">
                    <b>Description:</b> {modelData.password}
                  </p>
                  <hr />
                </div>
                <Link
                  style={{ background: "#64a5ad" }}
                  className="btn "
                  to="/home"
                >
                  Go Back
                </Link>
                <hr />
              </div>
            
      );
    }
  };



  return <div >{displayModelData()}</div>;
};

export default ViewUser;
