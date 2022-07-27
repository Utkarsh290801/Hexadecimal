import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const IssueAdd = () => {

    const AddForm = {
        title: "",
        description: "",
        assignedBy: "",
        assignedTo:"",
        creadtedBy:"",
        status:"",
    };
    const addSubmit = async(formdata) => {
      console.log(formdata);
      const response= await fetch('http://localhost:7000/issue/add',{
      method : 'POST',
        body : JSON.stringify(formdata),
        headers:{
          "Content-Type" : "application/json",
         }
        })
        if(response.status===200){
          console.log(response.status);
          console.log('success')
          Swal.fire({
                icon : "success",
                   title:"Well Done",
                   text:'You have done a wonderful job !! 👍👍'
               })     
                                  
  
        } else{
          console.log(response.status);
          console.log('something went wrong')
          Swal.error({
            icon : "error",
               title:"OOPS",
               text:'!! something went wrong!!'
           })     
        }      
    }
  return (
    <div>
      <h1>IssueAdd</h1>
      <Formik initialValues={AddForm} onSubmit={addSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              id="title"
              value={values.title}
              onChange={handleChange}
              className="w-100 mb-4"
            />
            <TextField
              label="Description"
              id="description"
              value={values.description}
              onChange={handleChange}
              className="w-100 mb-4"
            />
            <TextField
              label="Assigned By"
              id="assignedBy"
              value={values.assignedBy}
              onChange={handleChange}
              className="w-100 mb-4"
            />
            <TextField
              label="assignedTo"
              id="assignedTo"
              value={values.assignedTo}
              onChange={handleChange}
              className="w-100 mb-4"
            />
            <TextField
              label="creadtedBy"
              id="creadtedBy"
              value={values.creadtedBy}
              onChange={handleChange}
              className="w-100 mb-4"
            />
            <TextField
              label=" status"
              id="status"
              value={values.status}
              onChange={handleChange}
              className="w-100 mb-4"
            />
            
            <button className="btn btn-primary w-100 mb-4">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default IssueAdd;