import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../hooks/useAuth/useAuth"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"

const RequestMeals = () => {

  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()

  const {data: items} = useQuery({
      queryKey: ['items'],
      queryFn: async()=> {
        const res = await axiosPublic.get(`/myRequests/${user?.email}`)
        return res.data
      }
  })
  // console.log(items)



  return (
    <div>
      <div>
        <h1 className="text-3xl text-black font-semibold">Request Meals</h1>
      </div>
      <div className="divider"></div>


      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Titel</th>
        <th>Likes</th>
        <th>Riviews</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        items?.map((item, index)=>
        <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item?.title}</td>
        <td>{item?.likes}</td>
        <td>{item?.riview}</td>
        <td>
          <button className="bg-orange-600 text-white p-2 rounded-md"
          >
        {item?.status}
          </button>
          </td>
        <td><button className="btn bg-slate-200"
        >
          Cencel
          </button></td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default RequestMeals