export default function DataMembersPage(){
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
                <div className='join flex justify-center py-5'>
                    <button className='join-item btn btn-sm'>1</button>
                    <button className='join-item btn btn-sm btn-active bg-blue-500 text-white'>2</button>
                    <button className='join-item btn btn-sm'>3</button>
                    <button className='join-item btn btn-sm'>4</button>
                </div>
                </div>
        </main>
    )
}