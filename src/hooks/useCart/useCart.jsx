import useAxiosPublic from './../useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const axiosPublic = useAxiosPublic()

    const {data: carts=[], refetch} = useQuery({
        queryKey: ['carts'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/allmeals')
            return res.data
        }
    })


  return [carts, refetch]
}

export default useCart