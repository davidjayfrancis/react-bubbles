import axios from "axios";
import { axiosWithAuth } from "../components/utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const UPDATE_COLOR_SUCCESS = "UPDATE_COLOR_SUCCESS";
export const UPDATE_COLOR_FAIL = "UPDATE_COLOR_FAIL";
export const DELETE_COLOR_START = "DELETE_COLOR_START";
export const DELETE_COLOR_SUCCESS = "DELETE_COLOR_SUCCESS";
export const DELETE_COLOR_FAIL = "DELETE_COLOR_FAIL";

export const login = (creds, history) => dispatch => {
  console.log("this shit is working");
  dispatch({ type: LOGIN_START });

  axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      console.log("res: ", res);
      localStorage.setItem("token", res.data.payload);
      history.push("/bubbles");
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL });
      console.log("error: ", err);
    });

  // axios call
  // if success dispatch success, if not dispatch fail
};

export const updateColor = color => dispatch => {
  axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${color.id}`, color)
    .then(res => {
      dispatch({ type: UPDATE_COLOR_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: UPDATE_COLOR_FAIL });
    });
};

export const deleteColor = color => dispatch => {
  dispatch({ type: DELETE_COLOR_START });
  axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      dispatch({ type: DELETE_COLOR_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_COLOR_FAIL });
    });
};
