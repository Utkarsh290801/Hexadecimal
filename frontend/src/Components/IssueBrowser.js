import React, { useState } from "react";
import { useEffect } from "react";

const IssueBrowser = () => {
  const [issueArray, setissueArray] = useState([]);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:7000/issue/getall");
    const data = await response.json();
    console.log(data);
    setissueArray(data);
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);
         
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row text-center">
          {issueArray.map((curr) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src={"https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"} className="img-fluid"/>
      <a href="#!">
        <div className="mask" ></div>
      </a>
    </div>
                  <div className="card-body">
                    <h5 className="card-title">TITLE : {curr.title}</h5>
                    <p className="card-text">Description : {curr.description}</p>
                    <p className="card-text">Assigned By: {curr.assignedBy}</p>
                    <p className="card-text">Assigned To : {curr.assignedTo}</p>
                    <p className="card-text">Created By : {curr.creadtedBy}</p>
                    <p className="card-text">Status: {curr.status}</p>
                   
                    {/* <a href="#!" className="btn btn-primary">
                      Button
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default IssueBrowser;
