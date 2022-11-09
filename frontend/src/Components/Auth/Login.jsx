import { Button, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData, 
            [name] : value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload = formData
        console.log(payload)
    }
  return (
    <form onSubmit={handleSubmit}>
        <Heading>Login</Heading>
        <br />
        <Input placeholder='email' type="email" w={"sm"} mb={5} name="email" value = {formData.email} onChange ={handleChange}/>
        <br />
        <Input placeholder = "password" type= "password" w="sm" mb={5} name="password" value = {formData.password} onChange ={handleChange}/>
        <br />
        <Input type="submit" value="Login" w="100px"/> 
    </form>
  )
}

export default Login