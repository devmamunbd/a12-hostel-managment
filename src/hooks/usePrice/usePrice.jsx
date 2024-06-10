// import { useQuery } from '@tanstack/react-query'
// import useAxiosPublic from '../useAxiosPublic/useAxiosPublic'

// const usePrice = () => {
//     const axiosPublic = useAxiosPublic()

//     const {data: packs=[], refetch}= useQuery({
//         queryKey: ['packs'],
//         queryFn: async()=> {
//             const res = await axiosPublic.get('/packagePrice')
//             return res.data
//         }
//         // return []
//     })
//     // console.log(packs)
//     return [packs, refetch]

// }

// export default usePrice