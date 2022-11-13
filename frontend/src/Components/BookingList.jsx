import React, {useEffect} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import Booking from '../Pages/Booking';
import { getBookings } from '../Redux/AppReducer/action';
const BookingList = () => {
const data = useSelector((store) => store.AppReducer.data);
const dispatch = useDispatch();
// console.log("Before useEffect",data)
useEffect(() => {
    dispatch(getBookings());
},[]);

console.log("After useEffect",data)
  return (
    <>
     {data?.map((ele) => 
        <div key={ele._id}>
          <Booking bookingData={ele}/>
        </div>
     )}
    </>
  )
}

export default BookingList;