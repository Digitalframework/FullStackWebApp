'use client';
import axios from "axios";
import { useState, useEffect } from 'react';


export default function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //url: 'http://localhost:8080/api/v1/auth/register',
  async function onSubmit (event:any) {
    event.preventDefault()
    try {
    await axios.post(
      'http://localhost:8080/api/v1/auth/register',
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    )//;
    .then(function (response) {
    alert("Registration sucessful")
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");  
    console.log(response);
    })
    
    }
    catch(err){
      alert("User Registration failed");
    }

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your firstname"
                name="firstname"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                lastname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your lastname"
                name="lastname"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value)
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </div>

            <div className="mb-4">
                         <label htmlFor="password" className="form-label">
                            password
                          </label>
                          <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(event) => {
                              setPassword(event.target.value)
                            }}
                          />
                        </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
