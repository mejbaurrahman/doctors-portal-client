import { updateCurrentUser } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

export default function Registration() {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {
    createUser, 
    user, 
    loading,
    updateUser
  } = useContext(AuthContext);

  const handleSignUp = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      const userInfo ={
        displayName: data.name
      };
      updateUser(userInfo)
      .then(result=>{
        console.log(result.user);
      })
      .catch((error)=>{
        console.log(error.message)
      })
    })

  };
  return (
    <div className='flex justify-center items-center my-16'>
      <div className='lg:w-1/3 w-full p-10 border border-1'>
        <h1 className='text-center text-xl mb-5 font-semibold'>Sign Up</h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="form-control w-full max-w-xs">
      <label className="label"> <span className="label-text">Name</span></label>
        <input type="text" 
        {...register("name", { required: "Name is required" })}
        placeholder="name" 
        className="input input-bordered w-full max-w-xs" />
       
    </div>
    {errors.name?.type === 'required' && <p className='text-rose-800' role="alert">Name is required</p>} 
      
      <div className="form-control w-full max-w-xs">
      <label className="label"> <span className="label-text">Email</span></label>
        <input type="email" 
        {...register("email", { required: "Email is required" })}
        placeholder="Email" 
        className="input input-bordered w-full max-w-xs" />
       
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
