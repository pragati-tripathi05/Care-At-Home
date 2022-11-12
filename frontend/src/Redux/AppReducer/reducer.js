import * as types from "./actionTypes";

const initialState = {
  bookings: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_BOOKING_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.GET_BOOKING_SUCCESS:
        return {
          ...state,
          bookings: payload,
          isLoading: false,
          isError: false,
        };
  
      case types.GET_BOOKING_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

    default:
        return state;
    }
  };

  export {reducer}