import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  console.log("this shit is working");
  dispatch({ type: LOGIN_START });

  axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      console.log("res: ", res);
      localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL });
      console.log("error: ", err);
    });

  // axios call
  // if success dispatch success, if not dispatch fail
};
