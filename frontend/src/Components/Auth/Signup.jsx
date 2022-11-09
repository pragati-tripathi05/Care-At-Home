import { Button, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function Signup() {
    const [formData, setFormData] = useState({
        name : "",
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
    }
  return (
    <form onSubmit={handleSubmit}>
        <Heading>Signup</Heading>
        <br />
        <Input placeholder='name' type="text" w="sm" mb={5} name="name" value = {formData.name} onChange ={handleChange}/> 
        <br />
        <Input placeholder='email' type="email" w={"sm"} mb={5} name="email" value = {formData.email} onChange ={handleChange}/>
        <br />
        <Input placeholder = "password" type= "password" w="sm" mb={5} name="password" value = {formData.password} onChange ={handleChange}/>
        <br />
        <Input type="submit" value="Signup" w="100px"/> 
    </form>
  )
}

export default Signup