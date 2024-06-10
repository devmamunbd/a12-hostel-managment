import axios from "axios"
import useAuth from './../useAuth/useAuth';
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://assignment-server-fawn.vercel.app',
})

const useAxiosSecure = () => {
  const {logOut} = useAuth()
  const navigate = useNavigate()

  //request
  axiosSecure.interceptors.request.use(function(config) {
    const token = localStorage.getItem('accessToken')
    // console.log(token)
    config.headers.authorization = `Bereer ${token}`
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  })


  //interceptor 401 and 403
  axiosSecure.interceptors.response.use(function(response){
    return response
  }, async (error)=>{
    const status = error.response?.status;
    // console.log("error in the interceptor", status)
    if (status === 401 || status === 403){
     await logOut()
     navigate('/login')
    }
    return Promise.reject(error);
  })

  return axiosSecure
}

export default useAxiosSecure