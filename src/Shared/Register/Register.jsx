/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic"
import useAuth from "../../hooks/useAuth/useAuth"
import Swal from "sweetalert2"






const Register = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const {user, createUser, updateUserProfile} = useAuth()
    const { register, reset, handleSubmit,formState: { errors }, } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            updateUserProfile(data.name, data.photoURL)
            const userInfo = {
                name: data.name, 
                email: data.email,
                photoURL: data.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(()=> {
                    reset()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User Register Success",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                navigate('/')
            })
        })
        .catch(error => {
            console.log(error)
        })

       
       
      }
    
  return (
    <div className="px-10 py-5 bg-white shadow-xl border border-gray-300 w-[400px] h-[530px] mx-auto">
        <h1 className="text-center text-black font-bold text-2xl">Register Please</h1>
        <div className="mt-10">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                    <label htmlFor="">Full Name</label>
                    <input className="bg-white p-2 outline-none border border-gray-300"
                    {...register('name')}
                    type="text" placeholder="Full Name"/>
                    </div>
                    <div className="flex flex-col gap-1">
                    <label htmlFor="">Email</label>
                    <input className="bg-white p-2 outline-none border border-gray-300"
                    {...register('email')}
                    type="email" placeholder="Email"/>
                    </div>
                    <div className="flex flex-col gap-1">
                    <label htmlFor="">PhotoURL</label>
                    <input className="bg-white p-2 outline-none border border-gray-300"
                    {...register('photoURL')}
                    type="text" placeholder="PhotoURL"/>
                    </div>
                    <div className="flex flex-col gap-1">
                    <label htmlFor="">Password</label>
                    <input className="bg-white p-2 outline-none border border-gray-300"
                    {...register('password')}
                    type="text" placeholder="Password"/>
                    </div>
                    <div className="mt-7">
                        <button className="w-full bg-blue-500 text-white py-2 font-bold" type="submit">Register</button>

                    </div>
                </div>
            </form>
            <h1 className="mt-2">Already Have an account? <Link to="/login" className="text-blue-500 underline">Please Login</Link> </h1>

        </div>
    </div>
  )
}

export default Register