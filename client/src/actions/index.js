import axios from "axios";

const LOGIN_START = "LOGIN_START";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = () => dispatch => {
  dispatch({ type: LOGIN_START });

  // axios call
  // if success dispatch success, if not dispatch fail
};
