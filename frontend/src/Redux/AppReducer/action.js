import * as types from "./actionTypes";
import axios from "axios";

const getBookings = (payload) =>  async(dispatch) => {
  // dispatch(getbookingsRequest());
  dispatch({ type: types.GET_BOOKING_REQUEST });

  try {
        const res = await axios
            .get(" http://localhost:4000/bookingHistory");
        dispatch({ type: types.GET_BOOKING_SUCCESS, payload:res.data });
        console.log("Data fetched successfully")
    } catch (err) {
        console.log("error", err);
        dispatch({ type: types.GET_BOOKING_FAILURE, payload: err });
        console.log("Error occuured while fetching")
    }
};

export { getBookings };
