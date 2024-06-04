/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../hooks/useAuth/useAuth"
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure"
import useCart from "../../../hooks/useCart/useCart"

const AdminProfile = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const [carts] = useCart()
  const {data: item=[]}= useQuery({
    queryKey: ['item'],
    queryFn: async()=> {
      const res = await axiosSecure.get(`/adminUsers/${user?.email}`)
      return res.data
    }
  })

  const adminUser = item.filter(item => item.role === 'admin')
  console.log(adminUser)

  return (
    <div>
      <div>
        <h1 className="text-4xl text-black font-bold">Admin Profile</h1>
      </div>

      <div className="mt-10">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Number of Meal Added</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        adminUser.map((admin, index)=> <tr key={admin._id}>
        <th>{index+1}</th>
        <th>
          <img className="w-12 h-12 rounded-lg" src={admin?.photoURL} alt="" />
        </th>
        <td>{admin.name}</td>
        <td>{admin.email}</td>
        <td>{carts.length}</td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default AdminProfile