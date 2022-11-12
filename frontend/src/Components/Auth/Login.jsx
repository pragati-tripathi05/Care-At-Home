import { Button, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import { store } from "../../Redux/store";

function Login() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const auth = useSelector((state) => {
    return { isAuth: state.token };
  });
  console.log(auth);
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
        alert(res.data.msg);
        // toast({
        //   title: 'Login Successfull!',
        //   status: 'success',
        //   duration: 2000,
        //   isClosable: true,
        // })
        dispatch(loginSuccessAction(res.data.token));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        // toast({
        //   title: 'S',
        //   status: 'success',
        //   duration: 2000,
        //   isClosable: true,
        // })
        dispatch(loginFailureAction());
      });
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "90%", textAlign: "center" }}>
      <Heading>Login</Heading>
      <br />
      <Input
        placeholder="email"
        type="email"
        w={"100%"}
        mb={5}
        name="email"
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
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <Input type="submit" value="Login" w="100px" />
    </form>
  );
}

export default Login;
