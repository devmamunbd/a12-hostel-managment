import useAuth from "../../../hooks/useAuth/useAuth";

const MyProfile = () => {
  const {user} = useAuth()
//  

  return (
    <div>
      <h1 className="text-black text-2xl font-bold">My Profile</h1>
      <div>
      <div className="overflow-x-auto">
  <table className="table mt-10">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Badge</th>
      </tr>
    </thead>
    <tbody>
      
          <th><img className="w-14 h-14 rounded-lg" src={user?.photoURL} alt="" /></th>
          <td>{user?.displayName || user?.name}</td>
          <td>{user?.email}</td>
          <td>{user?.badge}</td>
        

    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default MyProfile