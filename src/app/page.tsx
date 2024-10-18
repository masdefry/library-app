export default function HomePage() {
  return (
    <main>
      <section className='flex flex-col items-center gap-5 p-5 sm:p-10'>
        <h1 className='text-2xl sm:text-3xl font-medium text-center'>
          Welcome, <strong>Back!</strong>
        </h1>
        <label className='form-control w-full max-w-xs sm:max-w-sm md:max-w-md'>
          <div className='label'>
            <span className='label-text text-blue-500'>
              Username <strong>*</strong>
            </span>
          </div>
          <input
            type='text'
            placeholder='Type username'
            className='input input-bordered border-blue-500 text-blue-500 w-full'
          />
        </label>
        <label className='form-control w-full max-w-xs sm:max-w-sm md:max-w-md'>
          <div className='label'>
            <span className='label-text text-blue-500'>
              Password <strong>*</strong>
            </span>
          </div>
          <input
            type='text'
            placeholder='Type password'
            className='input input-bordered border-blue-500 text-blue-500 w-full'
          />
        </label>
        <button className='btn bg-blue-500 text-white w-full max-w-xs sm:max-w-sm md:max-w-md'>
          Sign in
        </button>
      </section>
    </main>
  );
}
