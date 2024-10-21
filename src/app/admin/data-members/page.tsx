'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export default function DataMembersPage(){
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

    console.log(dataMembers)

    return(
        <main>
            <div className='grid grid-cols-12 gap-3 md:gap-5'>
                <div className='col-span-12 md:col-span-9'>
                    <label className='input input-bordered border-blue-500 flex items-center gap-2'>
                    <input type='text' className='grow' placeholder='Search' />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='h-4 w-4 opacity-70 text-blue-500'>
                        <path
                        fillRule='evenodd'
                        d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                        clipRule='evenodd' />
                    </svg>
                    </label>
                </div>
                <div className='col-span-12 md:col-span-3'>
                    <button className='btn bg-blue-500 text-white w-full'>
                    Create Member
                    </button>
                </div>
                </div>
                <div className='overflow-x-auto py-5'>
                <table className='table min-w-full'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        dataMembers?.members.map((member, index) => {
                            return(
                                <tr>
                                    <th>{((limitData*page)-1) + index}</th>
                                    <td>{member?.first_name}</td>
                                    <td>{member?.last_name}</td>
                                    <td>{member?.phone_number}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className='join flex justify-center py-5'>
                    {
                        Array(dataMembers?.totalPage).fill(0).map((_, index) => {
                            return(
                                <button className='join-item btn btn-sm' onClick={() => setPage(index+1)}>{index+1}</button>
                            )
                        })
                    }
                </div>
                </div>
        </main>
    )
}




// totalPage: 2

// pagination FE: 1, 2

// [0,0]