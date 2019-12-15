import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_COLOR_FAIL,
  UPDATE_COLOR_SUCCESS,
  DELETE_COLOR_START,
  DELETE_COLOR_FAIL,
  DELETE_COLOR_SUCCESS
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UPDATE_COLOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case UPDATE_COLOR_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_COLOR_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case DELETE_COLOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload
      };
    case DELETE_COLOR_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
