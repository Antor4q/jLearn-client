
import useUsers from "../../../hooks/useUsers";
import UsersRow from "./UsersRow";



const ManageUsers = () => {

    const [users,refetch] = useUsers()
   
    return (
        <div className="bg-gray-200 min-h-screen lg:px-10">
            <div className="px-4 lg:px-0">
            <h4 className="md:text-4xl  text-2xl font-semibold pt-10">Manage all users</h4>
            </div>
               <div className="lg:p-8 my-20  rounded-lg bg-white ">
            
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="md:text-xl md:font-medium">
                        
                        <th>No</th>
                        <th>User name</th>
                        <th>User email</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Action</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                     {
                        users?.map((user,index)=> <UsersRow key={index} user={user} refetch={refetch} index={index}/>)
                     }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageUsers;