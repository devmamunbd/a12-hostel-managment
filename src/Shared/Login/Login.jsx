/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";



const Login = () => {
  const { register, reset, handleSubmit,formState: { errors }, } = useForm()
  const {singIn} = useAuth()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    singIn(data.email, data.password)
    .then(() => {
      reset()
      Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Login Success",
          showConfirmButton: false,
          timer: 1500
        });
      navigate('/')
    })
    .catch(error => {
      console.log(error)
    })
    
  }

  return (
    <div className="px-10 py-5 bg-white shadow-xl border border-gray-300 w-[400px] h-[500px] mx-auto">
    <h1 className="text-center text-black font-bold text-2xl">Login Please</h1>
    <div className="mt-10">

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
               
                <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input className="bg-white p-2 outline-none border border-gray-300"
                {...register('email')}
                type="email" placeholder="Email"/>
                </div>
               
                <div className="flex flex-col gap-1">
                <label htmlFor="">Password</label>
                <input className="bg-white p-2 outline-none border border-gray-300"
                {...register('password')}
                type="text" placeholder="Password"/>
                </div>
                <div className="mt-7">
                    <button className="w-full bg-blue-500 text-white py-2 font-bold" type="submit">Login</button>

                </div>
            </div>
        </form>
        <h1 className="mt-2">New In Here ? <Link to="/register" className="text-blue-500 underline">Please Register</Link> </h1>
        <div>
        <div className="divider divider-neutral">Or</div>

          <button className="w-full py-2 font-semibold bg-blue-500 text-white">Google</button>

        </div>
    </div>
</div>
  )
}

export default Login