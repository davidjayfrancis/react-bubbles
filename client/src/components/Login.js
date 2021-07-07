import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/index.js";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // call login function here
    props.login(creds, props.history).then(res => {
      props.history.push("/bubbles");
    });

    setCreds({
      username: "",
      password: ""
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <h2>Enter your username and password</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={creds.username}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={creds.password}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    data: state.data
  };
};

export default connect(mapStateToProps, { login })(Login);
