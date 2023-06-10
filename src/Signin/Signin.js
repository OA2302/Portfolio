import React, {useState} from 'react'
import { useFormik } from "formik";
import {Link} from 'react-router-dom';
import {
 Box,
 Button,
 FormControl,
 FormErrorMessage,
 FormLabel,
 Heading,
 Input,
 Select,
 Textarea,
 VStack,
} from "@chakra-ui/react";
import useSubmit from "../hooks/useSubmit";
import * as Yup from 'yup';
import './Signin.css'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //const history = useHistory();
  
   const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Add logic to create new user
     // history.push("/");
    };
    const {isLoading, response, submit} = useSubmit();
    const formik = useFormik({
        initialValues: {
          firstName: "",
          email: "",
          type: "hireMe",
          comment: "",
        },
        onSubmit: (values) => {
          submit('https:okikiadenekan3@gmail.com', values);
        },
        validationSchema: Yup.object({
          firstName: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          comment: Yup.string()
            .min(25, "Must be at least 25 characters")
            .required("Required"),
        }),
      });
     
  return (
    
    <Box className='signuip'>
    <Heading as="h1" id="contactme-section">
    Signup
  </Heading>
  <FormControl onSubmit={handleSubmit} className='form' >
    <FormLabel className='label' htmlFor='firstname'>firstName</FormLabel>
    <Input className='input' type='name' placeholder="Musk" id='firstname'/>
    <FormLabel className='label' htmlFor='lastname'>lastName</FormLabel>
    <Input className='input' type='name' placeholder="Elon" id='lastname'/>
    <FormLabel className='label' htmlFor='email'>Email</FormLabel>
          <Input className='input' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}name="email" id="email" 
                 type="email" 
                 {...formik.getFieldProps("email")}  />
                 <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
                 <FormLabel className='label' htmlFor='password'>Password</FormLabel>
          <Input className='input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  id="password" />
          <FormLabel className='label' htmlFor='comfirmpassword'>Comfirm Password</FormLabel>
          <Input className='input' type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='comfirmpassword'/>
          <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
        </FormControl>


</Box>
   
  )
}
 
export default Signup 

/*

import { Link } from 'react-router-dom';
import './Signin.css';

function Signin() {
    return (
      <div className="signin">
        <div className="signin-logo">
          <h1>Signin</h1>
        </div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
  export default Signin;
  */