import { IoPeople, IoReceipt } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";

export default function AdminPage(){
    return(
        <main>
            <section className='grid grid-cols-3 gap-10'>
                <div className='border border-blue-500 p-5 rounded-md flex justify-between items-center'>
                    <IoPeople className='text-blue-500 text-7xl' />
                    <div>
                        <h1 className='text-2xl text-blue-500 font-bold'>Members</h1>
                        <h1 className='text-2xl'>1209</h1>
                    </div>
                </div>
                <div className='border border-blue-500 p-5 rounded-md flex justify-between items-center'>
                    <MdMenuBook className='text-blue-500 text-7xl' />
                    <div>
                        <h1 className='text-2xl text-blue-500 font-bold'>Books</h1>
                        <h1 className='text-2xl'>509</h1>
                    </div>
                </div>
                <div className='border border-blue-500 p-5 rounded-md flex justify-between items-center'>
                    <IoReceipt className='text-blue-500 text-7xl' />
                    <div>
                        <h1 className='text-2xl text-blue-500 font-bold'>Lendings</h1>
                        <h1 className='text-2xl'>1501</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}