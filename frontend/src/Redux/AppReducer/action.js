import * as types from "./actionTypes";
import axios from "axios";

const getBookings = (params) => (dispatch) => {
  // dispatch(getbooksRequest());
  dispatch({ type: types.GET_BOOKING_REQUEST });

  axios
    .get("/bookings", params)
    .then((res) => {
      // console.log("r.data--", r.data);
      return dispatch({ type: types.GET_BOOKING_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("error", err);
      return dispatch({ type: types.GET_BOOKING_FAILURE });
    });
};

export { getBookings };
