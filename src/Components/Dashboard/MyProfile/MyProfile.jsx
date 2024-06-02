import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from './../../../hooks/useAxiosPublic/useAxiosPublic';

const MyProfile = () => {
  const axiosPublic = useAxiosPublic()
  const {data: items} = useQuery({
    queryKey: ['items'],
    queryFn: async()=> {
      const res = await axiosPublic.get('/users')
      return res.data
    }
  })
// console.log(items)

  return (
    <div>
      <h1 className="text-black text-2xl font-bold">My Profile</h1>
      <div>
      <div className="overflow-x-auto">
  <table className="table mt-10">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Badge</th>
      </tr>
    </thead>
    <tbody>
      {
        items.map((item, index) =>  <tr key={item._id}>
          <th>{index+1}</th>
          <th><img className="w-14 h-14 rounded-lg" src={item.photoURL} alt="" /></th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.badge}</td>
        </tr>)
      }
     
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default MyProfile