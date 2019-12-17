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
export const GET_COLORS_SUCCESS = "GET_COLORS_SUCCESS";

export const login = (creds, history) => dispatch => {
  console.log("this shit is working");
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      console.log("res: ", res);
      localStorage.setItem("token", res.data.payload);
      // history.push("/bubbles");
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL });
      console.log("error: ", err);
    });

  // axios call
  // if success dispatch success, if not dispatch fail
};

export const updateColor = color => dispatch => {
  return axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${color.id}`, color)
    .then(res => {
      dispatch({ type: UPDATE_COLOR_SUCCESS });
      // call getColor again here;
    })
    .catch(err => {
      dispatch({ type: UPDATE_COLOR_FAIL });
    });
};

export const deleteColor = color => dispatch => {
  dispatch({ type: DELETE_COLOR_START });
  return axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      dispatch({ type: DELETE_COLOR_SUCCESS });
      // call getColor again here;
    })
    .catch(err => {
      dispatch({ type: DELETE_COLOR_FAIL });
    });
};

export const getColors = fn => dispatch => {
  return axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => {
      dispatch({ type: GET_COLORS_SUCCESS, payload: res.data });
      fn(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
