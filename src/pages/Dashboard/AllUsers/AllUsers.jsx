import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })


    const handleDeleteUser = user =>{

    }



    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All users</h2>
                <h2 className="text-3xl">Total Users: {users.length} </h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map( (user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button onClick={() => handleDeleteUser(user)} className="btn  btn-lg bg-yellow-600">
                <FaUsers className="text-white"></FaUsers>
              </button>
                </td>
                <td>
                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg bg-red-600">
                <FaTrashAlt className="text-white"></FaTrashAlt>
              </button>
                </td>
              </tr> )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;