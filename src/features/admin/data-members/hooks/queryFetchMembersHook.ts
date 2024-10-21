import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export const queryFetchMembersHook = () => {
    const [page, setPage] = useState(1)
    const [limitData, setLimitData] = useState(2)

    const {data: dataMembers} = useQuery({
        queryKey: ['getMembers', page], 
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/members', {
                params: {
                    page, 
                    limit_data: limitData
                }
            })
            return res.data.data
        }
    })

    return{
        page, 
        setPage, 
        limitData, 
        setLimitData, 
        dataMembers
    }
}