import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

export default function Login() {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {user, login, loading} = useContext(AuthContext);
  const handleLogin = data => {
    console.log(data);
    login(data.email, data.password)
    .then(result=>{
      const user = result.user;
      console.log(user)
    }).catch((error)=>{
      console.log(error.message)
    })


  };
  return (
    <div className='flex justify-center items-center my-16'>
      <div className='lg:w-1/3 w-full p-10 border border-1'>
        <h1 className='text-center text-xl mb-5 font-semibold'>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
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
    <Link to='/' ><p className='mb-4'>Forget Password?</p></Link>
   
      
     
      <input type="submit" value="Login" className='btn btn-accent w-full' />
      </form>

      <p>New to doctor portal <Link to='/register' className='text-primary'>Create New Account</Link></p>
      <div className="divider">OR</div>
      <div className='flex justify-center'>
      <button className='btn btn-accent btn-outline'>Continue with Google</button>
      </div>
      </div>
    </div>
  )
}
