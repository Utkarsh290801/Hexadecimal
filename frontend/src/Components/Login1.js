import React from 'react'
import "./Login1.css"
const Login1 = () => {
   
  return (
    <div> <div class="container">
    <section id="formHolder">
       <div class="row">
          {/* <!-- Brand Box --> */}
          <div class="col-sm-6 brand">  
             <div class="success-msg">
                <p>Great! You have successfully created your Profile</p>
                {/* <!-- <a href="https://www.youtube.com/channel/UCc5GjlNTdSV4ZZCsX61mccg" --> */}
                <a href=""
                 class="profile">Click For My Profile</a>
             </div>
          </div>
          {/* <!-- Form Box --> */}
          <div class="col-sm-6 form">
             {/* <!-- Login Form --> */}
             <div class="login form-peice switched">
                <form class="login-form" action="#" method="post">
                   <div class="form-heading">
                     <h2>Sign In</h2>
                   </div>
                   <div class="form-group">
                      <label for="loginemail">Email Address</label>
                      <input type="email" name="loginemail" id="loginemail" required/>
                   </div>
 
                   <div class="form-group">
                      <label for="loginPassword">Password</label>
                      <input type="password" name="loginPassword" id="loginPassword" required/>
                   </div>
 
                   <div class="CTA">
                      <input type="submit" value="Sign In"/>
                      <a href="#" class="switch">I'm New User</a>
                   </div>
                </form>
             </div>
             {/* <!-- End Login Form --> */}
 
             {/* <!-- Signup Form --> */}
             <div class="signup form-peice">
                <form class="signup-form" action="#" method="post">
                   <div class="form-heading">
                    <h2>Create Account</h2>
                   </div>
 
                   <div class="form-group">
                      <label for="name">Full Name</label>
                      <input type="text" name="username" id="name" class="name"/>
                      <span class="error"></span>
                   </div>
 
                   <div class="form-group">
                      <label for="email">Email Address</label>
                      <input type="email" name="emailAdress" id="email" class="email"/>
                      <span class="error"></span>
                   </div>
 
             <div class="form-group">
                      <label for="phone">Phone Number - <small>Optional</small></label>
                      <input type="text" name="phone" id="phone"/>
                   </div>
 
                   <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" name="password" id="password" class="pass"/>
                      <span class="error"></span>
                   </div>
 
                   <div class="form-group">
                      <label for="passwordCon">Confirm Password</label>
                      <input type="password" name="passwordCon" id="passwordCon" class="passConfirm"/>
                      <span class="error"></span>
                   </div>
 
                   <div class="CTA">
                      <input type="submit" value="Signup Now" id="submit"/>
                      <a href="#" class="switch">I have an account</a>
                   </div>
                </form>
             </div>
             {/* <!-- End Signup Form --> */}
          </div>
       </div>
    </section>
 
 </div></div>
  )
}

export default Login1