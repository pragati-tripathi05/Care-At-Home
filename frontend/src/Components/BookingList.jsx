import React, {useEffect} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { getBookings } from '../Redux/AppReducer/action';
const BookingList = () => {
const data = useSelector((store) => store.AppReducer.data);
const dispatch = useDispatch();
console.log("Before useEffect",data)
useEffect(() => {
    dispatch(getBookings());
},[]);

console.log("After useEffect",data)
  return (
    <div>
        Your Bookings
    </div>
  )
}

export default BookingList;