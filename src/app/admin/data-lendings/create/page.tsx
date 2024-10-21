'use client';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function CreateLendingPage() {
  const [dataMembers, setDataMembers] = useState([])
  const [selectedMember, setSelectedMember] = useState([])

  const {mutate: mutateFetchMember} = useMutation({
    mutationFn: async(value) => {
      return await axios.get('http://localhost:5000/members/search', {
        params: {
          data: value
        }
      })
    },
    onSuccess: (res) => {
      setDataMembers(res.data.data)
    },
    onError: (err) => {
      console.log(err)
    }
  })

  const debouncedInputFindMember = useDebouncedCallback(
    (value) => {
      mutateFetchMember(value)
      // Http Request, findMember
    },
    3000
  );

  const onSelectMember = (member) => {
    setSelectedMember([{...member}])
    setDataMembers([])
  }

    return (
      <main>
        <section>
          <h1 className='text-3xl md:text-4xl font-bold'>Form Lending</h1>
          <div className='py-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {/* Address - Full Width */}
            <label className='md:col-span-2 form-control w-full'>
              <div className='label'>
                <span className='label-text text-blue-500'>
                  Search Member:
                </span>
              </div>
              <div className='relative'>
                <input
                  onChange={(e) => debouncedInputFindMember(e.target.value)}
                  type='text'
                  placeholder='Type member id / email / phone number'
                  className='input input-bordered border-blue-500 text-blue-500 w-full'
                />
                <ul className='absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto'>
                  {
                    dataMembers?.map((member, index) => {
                      return(
                        <li
                          className='px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white'
                          onClick={() => onSelectMember(member)}
                        >
                          {member.phone_number} - {member.first_name} {member.last_name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </label>

            <div className='overflow-x-auto py-5 col-span-2'>
                <table className='table min-w-full'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{selectedMember[0]?.first_name}{selectedMember[0]?.last_name}</td>
                            <td>{selectedMember[0]?.phone_number}</td>
                            <td>{selectedMember[0]?.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <label className='md:col-span-2 form-control w-full'>
              <div className='label'>
                <span className='label-text text-blue-500'>
                  Search Book:
                </span>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Type title / author / publish year'
                  className='input input-bordered border-blue-500 text-blue-500 w-full'
                />
                <ul className='absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto'>
                  <li
                    className='px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white'
                  >
                    Book-01
                  </li>
                  <li
                    className='px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white'
                  >
                    Book-02
                  </li>
                  <li
                    className='px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white'
                  >
                    Book-03
                  </li>
                </ul>
              </div>
            </label>
            <div className='overflow-x-auto py-5 col-span-2'>
              <table className='table min-w-full'>
                  <thead>
                  <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                  </tr>
                  <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                  </tr>
                  <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                  </tr>
                  </tbody>
              </table>
            </div>
            {/* Submit Button - Full Width */}
            <button className='md:col-span-2 btn bg-blue-500 text-white w-full'>
              Submit
            </button>
          </div>
        </section>
      </main>
    );
  }
  