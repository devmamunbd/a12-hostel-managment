import useAxiosPublic from './../useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const axiosPublic = useAxiosPublic()

    const {data: carts=[]} = useQuery({
        queryKey: ['carts'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/allmeals')
            return res.data
        }
    })


  return [carts]
}

export default useCart