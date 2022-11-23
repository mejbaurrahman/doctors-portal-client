import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

export default function ManageDoctor() {
    const {user} = useContext(AuthContext);
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    // const [handleDeleteModal, setHandleDeleteModal] = useState()

    const closeModal = ()=>
    {
        setDeletingDoctor(null)
    }
    const {data: doctors = [], refetch} = useQuery({
        queryKey:['doctors', user?.email],
        queryFn: async()=>{
           const res = await fetch(`http://localhost:5000/doctors`)
           const data = await res.json();
           return data;
        }
    })
    
    const handleDeleteDoctor = doctor =>{
      fetch(`http://localhost:5000/doctors/${doctor._id}`,{
        method: 'DELETE',
        headers:{
          'content-type':'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
          toast.success('Deleted Successfully')
          refetch();
        }
        
      })
    }
    // const handleMakeAdmin = (id)=>{
    //     fetch(`http://localhost:5000/users/admin/${id}`,{
    //         method:'PUT',
    //         headers:{
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         if(data.modifiedCount>0){
    //             toast.success('Make Admin Succesfull');
    //             refetch();
    //         }
    //     })
    // }
      return (
        <div>
            <p className='text-3xl my-5'>Manage Doctors</p>
            {/* {
                users.map(user=><h1 key={user._id}>{user.name}</h1>)
            } */}
            <div>
            <div className="overflow-x-auto">
      <table className="table w-full">
    
        <thead>
          <tr>
            <th>Serial</th>
            <th>Avater</th>
            <th>Name</th>
            <th>Email</th>
            <th>Speciality</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          {
            doctors.map((doctor, i)=><tr className="hover">
            <td>{i+1}</td>
            <td><div className="avatar">
            <div className="w-24 rounded-full">
                <img src={doctor.image}/>
            </div>
            </div>
            </td>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.speciality}</td>
            <td>
            <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error">Delete</label>
            
            </td>
            
          </tr>
          )
          }
         
        </tbody>
      </table>
    </div>
    {
        deletingDoctor && <ConfirmationModal
        
        title={`Are you sure you want to delete`}
        message= "If you delete you can note be undone." 
        closeModal={closeModal}
        modalData = {deletingDoctor}
        successAction= {handleDeleteDoctor}
        >
        
        </ConfirmationModal>
    }
    
            </div>
        </div>
      )
    
}
