import { HiOutlineHome } from 'react-icons/hi';
import { BsPeople } from 'react-icons/bs';
import { LuBookMinus } from 'react-icons/lu';

const navigationLink = [
    {
        title: 'Home', 
        icon: <HiOutlineHome className='text-xl md:text-2xl' />,
        url: '/admin'
    },
    {
        title: 'Members', 
        icon: <BsPeople className='text-xl md:text-2xl' />,
        url: '/admin/data-members'
    },
    {
        title: 'Lendings', 
        icon: <LuBookMinus className='text-xl md:text-2xl' />,
        url: '/admin/data-lendings'
    }
]

export default function Sidebar(){
    return(
        <section className='hidden md:block md:col-span-3 p-5 md:p-10 h-screen border-r-2 shadow-md'>
            <h1 className='text-3xl md:text-4xl font-medium text-blue-500'>Hello,</h1>
            <h1 className='text-3xl md:text-4xl text-blue-500'>
                <strong>Defryan</strong>
            </h1>
            <section className='py-5 md:py-10 flex flex-col gap-3 md:gap-5'>
                {
                    navigationLink.map((navigation, index) => {
                        return(
                            <div key={index} className='flex items-center gap-2 md:gap-3'>
                                {navigation.icon}
                                <h1 className='text-lg md:text-xl font-thin'>{navigation.title}</h1>
                            </div>
                        )
                    })
                }
            </section>
        </section>
    )
}