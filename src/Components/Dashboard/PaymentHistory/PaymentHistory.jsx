import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../hooks/useAuth/useAuth"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"

const PaymentHistory = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
  const {data: items} = useQuery({
    queryKey: ['items'],
    queryFn: async()=> {
      const res = await axiosPublic.get(`/payments/${user?.email}`) 
      return res.data
    }
  })
  // console.log(items)

  return (
    <div>
      <h1 className="text-black text-3xl font-semibold">PaymentHistory</h1>

      <div>
        <div className="divider"></div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Price:</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody>


      {items?.length >0  ?
        <>
        { 
        items?.map((item, index)=> <tr key={item._id}>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>${item.price}</td>
        <td>{item.transactionId}</td>
      </tr>
      ) 
      }
        </> : 
        <div  className="top-12 left-48 text-lg md:text-3xl text-black font-bold">
        <p className="text-center">Not Payment Yet</p>
        </div>
      }
      
      
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default PaymentHistory