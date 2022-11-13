import * as types from "./actionTypes";
import axios from "axios";
import { accessData } from "../../utils/localStorage";
const token = accessData("token")
// console.log(token)
const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
const getBookings = (payload) =>  async(dispatch) => {
  // dispatch(getbookingsRequest());
  dispatch({ type: types.GET_BOOKING_REQUEST });

  try {
        const res = await axios
            .get("https://care-at-home.onrender.com/",config);
        dispatch({ type: types.GET_BOOKING_SUCCESS, payload:res.data });
        console.log("Data fetched successfully")
        console.log(res.data)
    } catch (err) {
        console.log("error", err);
        dispatch({ type: types.GET_BOOKING_FAILURE, payload: err });
        console.log("Error occuured while fetching")
    }
};

export { getBookings };
