import { REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT } from "./ActionTypes";
import axios from "axios"; 
import {API_BASE_URL} from "@/config/api"
// Register user
export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    }
    console.log("register success", data);
  } catch (error) {
    console.log(error);
  }
};

// Login user
export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
    console.log("login success", data);
  } catch (error) {
    console.log(error);
  }
};

// Get user profile
export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/auth/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("get user success", data);
  } catch (error) {
    console.log(error);
  }
};

// Logout user
export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
