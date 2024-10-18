import { IoLocationOutline } from 'react-icons/io5';
import Sidebar from '@/components/sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='grid grid-cols-12 h-screen'>
      <Sidebar />
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
