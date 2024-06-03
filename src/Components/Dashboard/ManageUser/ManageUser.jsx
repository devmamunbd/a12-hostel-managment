/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "./../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSucure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSucure.get(`users`);
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    axiosSucure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data)
      if (res.data.modifiedCount>0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    })
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    // console.log(text)
  };

  return (
    <div>
      <div>
        <h1 className="text-black font-semibold text-4xl">Manage User</h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <form onSubmit={handleSearch}>
          <div className="flex justify-between gap-8">
            <input
              className="p-2 w-[400px] outline-none bg-slate-50 border-[1px] border-gray-400"
              type="text"
              name="search"
              placeholder="Search With Email or Username"
            />
            <button className="px-12 py-2 bg-blue-500 text-white font-semibold">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Subscription Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    { user.role === 'admin' ? "Admin" : <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg"
                    >
                      <FaUser />
                    </button>}
                  </td>
                  <td>Subcription Status</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
