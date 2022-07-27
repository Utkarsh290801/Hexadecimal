import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';
import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
const Minilogin = () => {
    const [showPassword,setShowPassword]=useState(false);
    const signup={
        username: "",
        email: "",
        password: "",  
    };
    const userSubmit = (formdata) => {
        console.log(formdata);}
        const formSchema = Yup.object().shape({
            username: Yup.string()
              .min(2, 'Too Short username!')
              .max(5, 'Too Long username !')
              .required('Required is required'),
            
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Required')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
            
          });
  return (
    <div className="sign-bg bg-dark">
      <div className=" pt-5">
        <div className="col-md-3 col-sm-6 mx-auto">
          <div
            className="card "
            style={{
                boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }}
          >
            <div className="card-body" >
            <div className="col-md-3 col-sm-6 mx-auto ">
              <h4 style={{ textAlign: "center", marginTop: "2%" }}>
                <i>Sign Up</i>

              </h4>
            </div>
              <hr className="mb-4" />
            <Formik initialValues={signup} onSubmit={userSubmit} validationSchema={formSchema}>
        {({ values, handleChange, handleSubmit , errors,touched}) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="standard"                 
              className="w-100 mb-3
            "
              id="username" // else we use name ="username"
              onChange={handleChange}
              value={values.username}
              helperText={touched.username ?  errors.username: ''}
              error={Boolean(errors.username && touched.username)}
            />
            <TextField
              label="Email"
              variant="standard"
              className="w-100 mb-3"
              id="email"
             s
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlined />
                  </InputAdornment>
                )}}
              onChange={handleChange}
              value={values.email}
              helperText={touched.email ? errors.email :''}
              error={Boolean(errors.email  && touched.email)}
            />
            <TextField
              label="Password"
              variant="standard"
              className="w-100 mb-4"
              id="password"
              type={showPassword ? "text":"password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={(e)=> setShowPassword(!showPassword)} >
                        {showPassword? <Visibility/>:<VisibilityOff/>}
                        </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
              value={values.password}
              helperText={touched.password ? errors.password:''}
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
  );
};

export default Minilogin;
