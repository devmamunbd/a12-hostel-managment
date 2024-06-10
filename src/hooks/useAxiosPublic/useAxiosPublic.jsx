import axios from "axios"


const axiosPublic = axios.create({
    baseURL: 'https://assignment-server-fawn.vercel.app',
})

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic