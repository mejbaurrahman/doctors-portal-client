import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider'

export default function AllUsers() {
const {user} = useContext(AuthContext);

const {data: users = [], refetch} = useQuery({
    queryKey:['users', user?.email],
    queryFn: async()=>{
       const res = await fetch(`http://localhost:5000/users`)
       const data = await res.json();
       return data;
    }
})

const handleMakeAdmin = (id)=>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
        method:'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.modifiedCount>0){
            toast.success('Make Admin Succesfull');
            refetch();
        }
    })
}
  return (
    <div>
        <p className='text-3xl my-5'>All Users</p>
        {/* {
            users.map(user=><h1 key={user._id}>{user.name}</h1>)
        } */}
        <div>
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
      {
        users.map((user, i)=><tr className="hover">
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.role === 'admin'? `` : <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-success'>Make Admin</button>}</td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
      )
      }
     
    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}
