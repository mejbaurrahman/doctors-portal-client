import { useQuery } from '@tanstack/react-query';
import id from 'date-fns/esm/locale/id/index.js';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, Link, useNavigate } from 'react-router-dom'; 

export default function AddADoctor() {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageKey = process.env.REACT_APP_img_bb_key;
    const {data: options=[], isLoading} = useQuery({
      queryKey:['options'],
      queryFn: async ()=>{
        const res= await fetch(`http://localhost:5000/appointmentSpeciality`)
        const data = await res.json();
        return data;
      }
    })
    const handleAddADoctor = data =>{
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_img_bb_key}`,{
          method:'POST',
          body:formData
        }).then(res=>res.json())
        .then(imageData=>{
          if(imageData.success){
            const doctor = {
              name: data.name,
              email: data.email,
              speciality: data.speciality,
              image: imageData.data.url

            };

            fetch(`http://localhost:5000/doctors`,{
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(doctor)
            }).then(res=>res.json())
            .then(data=>{
              if(data.insertedId){
                toast.success(`Dr. ${doctor.name} added successfully`);
                navigate('/dashbord/managedoctor')
              }
            })
          }
        })
    }

    if(isLoading){
      return <div className='flex justify-center mt-10'>
      <progress className="progress w-56"></progress>
     </div>
    }
  return (
    <div className='flex justify-center items-center my-16'>
      <div className='lg:w-2/3 w-full p-10 border border-1'>
        <h1 className='text-center text-xl mb-5 font-semibold'>Add A Doctor</h1>
      <form onSubmit={handleSubmit(handleAddADoctor)}>
      <div className="form-control w-full ">
      <label className="label"> <span className="label-text">Name</span></label>
        <input type="text" 
        {...register("name", { required: "Name is required" })}
        placeholder="name" 
        className="input input-bordered w-full " />
       
    </div>
    {errors.name?.type === 'required' && <p className='text-rose-800' role="alert">Name is required</p>} 
      
      <div className="form-control w-full mb-3">
      <label className="label"> <span className="label-text">Email</span></label>
        <input type="email" 
        {...register("email", { required: "Email is required" })}
        placeholder="Email" 
        className="input input-bordered w-full" />
       
    </div>
      <div className="form-control w-full mb-3">
      <label className="label"> <span className="label-text">Speciality</span></label>
      <select {...register("speciality")} 
        className='py-3 px-2 w-full border border-2 rounded'
      >
        <option disabled selected>Select Speciality</option>
        {
          options?.length>0 &&
          options?.map((option,i)=><option key={option._id} value={option.name}>{option.name}</option>)
        }
      </select>
       
    </div>
    {errors.email?.type === 'required' && <p className='text-rose-800' role="alert">Email is required</p>} 
      
    <div className="form-control w-full mb-3">
      <label className="label"> <span className="label-text">Image</span></label>
        <input type="file" 
        {...register("image")}
        placeholder="image" 
        className="input w-full" />
       
    </div>
      <input type="submit" value="Add A Doctor" className='btn btn-accent w-full' />
      </form>
      </div>
    </div>
  )
}
