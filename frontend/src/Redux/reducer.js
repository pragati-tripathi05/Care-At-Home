import { accessData, saveData } from "../utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const initState = {
    isAuth: accessData("token") ? true : false,
  isAuth: false,
  isAuthLoading: false,
  token: accessData("token") || null,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isAuthLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      saveData("token", action.payload);
      saveData("isAuth", true);
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
        token: action.payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthLoading: false,
        isAuth: false,
      };
    }
    case LOGOUT: {
      saveData("token" , null)
      saveData("isAuth" ,false)
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default:
      return state;
  }
};
