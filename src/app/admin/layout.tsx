import { HiOutlineHome } from 'react-icons/hi';
import { BsPeople } from 'react-icons/bs';
import { LuBookMinus } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='grid grid-cols-12 h-screen'>
      <section className='hidden md:block md:col-span-3 p-5 md:p-10 h-screen border-r-2 shadow-md'>
        <h1 className='text-3xl md:text-4xl font-medium text-blue-500'>Hello,</h1>
        <h1 className='text-3xl md:text-4xl text-blue-500'>
          <strong>Defryan</strong>
        </h1>
        <section className='py-5 md:py-10 flex flex-col gap-3 md:gap-5'>
          <div className='flex items-center gap-2 md:gap-3'>
            <HiOutlineHome className='text-xl md:text-2xl' />
            <h1 className='text-lg md:text-xl font-thin'>Home</h1>
          </div>
          <div className='flex items-center gap-2 md:gap-3'>
            <BsPeople className='text-xl md:text-2xl' />
            <h1 className='text-lg md:text-xl font-thin'>Members</h1>
          </div>
          <div className='flex items-center gap-2 md:gap-3'>
            <LuBookMinus className='text-xl md:text-2xl' />
            <h1 className='text-lg md:text-xl font-thin'>Lendings</h1>
          </div>
        </section>
      </section>
      <section className='overflow-auto col-span-12 md:col-span-9 px-3 md:px-5 py-3'>
        <div className='bg-gray-200 text-black flex justify-end p-3 w-full rounded-md'>
          <h1 className='text-lg font-bold text-blue-500 md:text-xl'>Perpus BSD</h1>
          <IoLocationOutline className='text-blue-500' />
        </div>
        <div className='breadcrumbs text-xs py-5'>
          <ul>
            <li><a>Home</a></li>
            <li><a>Documents</a></li>
            <li>Add Document</li>
          </ul>
        </div>
        {children}
      </section>
    </main>
  );
}
