import { updateCurrentUser } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useToken from '../../../Hooks/useToken/useToken';

export default function Registration() {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {
    createUser, 
    user, 
    setUser,
    loading,
    setLoading,
    updateUser
  } = useContext(AuthContext);
  const [createdEmail, setCreatedEmail] = useState('');
  const [token] = useToken(createdEmail);
  const navigate = useNavigate();

  if(token){
    navigate('/');
  }
  const handleSignUp = data => {
    console.log(data);
    
    createUser(data.email, data.password)
    .then(result=>{
      const user = result.user;
      // console.log(user);
      const userInfo ={
        displayName: data.name
      };
      setLoading(true)
      updateUser(userInfo)
      .then(result=>{
        // setUser(user);
        saveUser(data.name, data.email)
        setLoading(false);
        // navigate('/');
        
        // console.log(user)
      })
      .catch((error)=>{
        console.log(error.message)
      })
    })

  }

  const saveUser =(name, email)=>{
    const user = {name, email};
    fetch(`http://localhost:5000/users`,{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      toast.success('Saved in database succesfully')
      setCreatedEmail(email)
    }).catch(error=>console.log(error.message))
  }

  
  return (
    <div className='flex justify-center items-center my-16'>
      <div className='lg:w-1/3 w-full p-10 border border-1'>
        <h1 className='text-center text-xl mb-5 font-semibold'>Sign Up</h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="form-control w-full ">
      <label className="label"> <span className="label-text">Name</span></label>
        <input type="text" 
        {...register("name", { required: "Name is required" })}
        placeholder="name" 
        className="input input-bordered w-full " />
       
    </div>
    {errors.name?.type === 'required' && <p className='text-rose-800' role="alert">Name is required</p>} 
      
      <div className="form-control w-full ">
      <label className="label"> <span className="label-text">Email</span></label>
        <input type="email" 
        {...register("email", { required: "Email is required" })}
        placeholder="Email" 
        className="input input-bordered w-full" />
       
    </div>
    {errors.email?.type === 'required' && <p className='text-rose-800' role="alert">Email is required</p>} 
      
      
      <div className="form-control w-full">
      <label className="label"> <span className="label-text">Password</span></label>
        <input type="password" 
        {...register("password", { required: "Password is required" })}
        placeholder="Password" 
        className="input input-bordered w-full" />
         {errors.password?.type === 'required' && <p className='text-rose-800' role="alert">Password is required</p>} <br />
       
    </div>
      <input type="submit" value="Sign Up" className='btn btn-accent w-full' />
      </form>

      <p>Already have account <Link to='/login' className='text-primary'>Login Now</Link></p>
      <div className="divider">OR</div>
      <div className='flex justify-center'>
      <button className='btn btn-accent btn-outline'>Continue with Google</button>
      </div>
      </div>
    </div>
  )
}
