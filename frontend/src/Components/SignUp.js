import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Minilogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const signup = {
    username: "",
    email: "",
    password: "",
  };
  const userSubmit = async (formdata) => {
    console.log(formdata);
    const response = await fetch("http://localhost:7000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "You have done a wonderful job !! 👍👍",
      });
      navigate("/login");
    } else {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
  };
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short username!")
      .max(8, "Too Long username !")
      .required("Required is required"),

    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return (
    <div className="">
        <div style={{ padding: "5rem ", background:"linear-gradient(to bottom right, #ff8f267e, #1bffb3)"} }>
<img src='https://www.swiftelearningservices.com/wp-content/uploads/2017/01/Bug-Tracker-2.png' style={{float:"left", width:"150px",marginTop:"40px"  }}/>
<h1 style={{fontSize:"50px", marginLeft:"25%"}}>Welcome to Issue Tracker </h1>   
<img src='https://www.swiftelearningservices.com/wp-content/uploads/2017/01/Bug-Tracker-2.png' style={{float:"right", width:"150px",marginTop:"-30px" }}/>
        </div>
      <div className="row">
        <div className="col-sm-6 px-0 d-none d-sm-block banner mx-auto">
        {/* <div class="col-sm-6"> */}
          {/* <div className="sign-cont "> */}
            <div className=" pt-5">
              {/* <div className="col-md-6 col-sm-6 mx-auto"> */}
                <div
                  className="card "
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <div className="card-body">
                    <div className="col-md-3 col-sm-6 mx-auto ">
                      <h4 style={{ textAlign: "center", marginTop: "2%" }}>
                        <i>Sign Up</i>
                      </h4>
                    </div>
                    <hr className="mb-4" />
                    <Formik
                      initialValues={signup}
                      onSubmit={userSubmit}
                      validationSchema={formSchema}
                    >
                      {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <TextField
                            label="Username"
                            variant="standard"
                            className="w-100 mb-3
            "
                            id="username" // else we use name ="username"
                            onChange={handleChange}
                            value={values.username}
                            helperText={touched.username ? errors.username : ""}
                            error={Boolean(errors.username && touched.username)}
                          />
                          <TextField
                            label="Email"
                            variant="standard"
                            className="w-100 mb-3"
                            id="email"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <EmailOutlined />
                                </InputAdornment>
                              ),
                            }}
                            onChange={handleChange}
                            value={values.email}
                            helperText={touched.email ? errors.email : ""}
                            error={Boolean(errors.email && touched.email)}
                          />
                          <TextField
                            label="Password"
                            variant="standard"
                            className="w-100 mb-4"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={(e) =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            onChange={handleChange}
                            value={values.password}
                            helperText={touched.password ? errors.password : ""}
                            error={Boolean(errors.password && touched.password)}
                          />
                          <Button type="submit" variant="contained" fullWidth>
                            {" "}
                            Sign Up
                          </Button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    // </div>
    // </div>
  );
};

export default Minilogin;
