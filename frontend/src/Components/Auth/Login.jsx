import { Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../../Redux/action";
import { useNavigate } from "react-router-dom";

function Login({onClose}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = formData;
    dispatch(loginRequestAction());
    axios
      .post("http://localhost:4000/login", payload)
      .then((res) => {
        console.log(res.data);
        // alert(res.data.msg);
        dispatch(loginSuccessAction(res.data));
        onClose()
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailureAction());
      });
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "90%", textAlign: "center" }}>
      {/* <Heading>Login</Heading> */}
      <br />
      <Input
        placeholder="email"
        type="email"
        w={"100%"}
        mb={5}
        name="email"
        required="required"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <Input
        placeholder="password"
        type="password"
        w={"100%"}
        mb={5}
        name="password"
        required="required"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <Input type="submit" value="Login" w="100px" color={"white"} bg="black"/>
    </form>
  );
}

export default Login;
