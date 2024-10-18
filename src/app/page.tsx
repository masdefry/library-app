'use client';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {LoginFormSchema} from '@/features/auth/schemas/LoginFormSchema'
import {useMutation} from '@tanstack/react-query'
import axios from 'axios';
import { ILoginForm } from '@/features/auth/types';

export default function HomePage() {
  
const {mutate: mutateAuthLogin, isPending: isPendingMutateAuthLogin} = useMutation({
  mutationFn: async(values: ILoginForm) => {
    return await axios.post('http://localhost:5000/auth', {
      username: values.username, 
      password: values.password
    })
  }, 
  onSuccess: (res) => {
    console.log(res)
  }, 
  onError: (err) => {
    console.log(err)
  }
})

  return (
    <main>
      <section className='flex flex-col items-center gap-5 p-5 sm:p-10'>
        <h1 className='text-2xl sm:text-3xl font-medium text-center'>
          Welcome, <strong>Back!</strong>
        </h1>
        <Formik
          initialValues={{
            username: '', 
            password: ''
          }}
          validationSchema={LoginFormSchema}
          onSubmit={(values) => {
            console.log(values)
            mutateAuthLogin(values)
          }}
        >
          <Form className='w-full flex flex-col items-center gap-5'>
            <label className='form-control w-full max-w-xs sm:max-w-sm md:max-w-md'>
            <div className='label'>
              <span className='label-text text-blue-500'>
                Username <strong>*</strong>
              </span>
            </div>
            <Field
              name='username'
              type='text'
              placeholder='Type username'
              className='input input-bordered border-blue-500 text-blue-500 w-full'
            />
            <ErrorMessage name='username' component={'div'} className='text-red-500' />
          </label>
          <label className='form-control w-full max-w-xs sm:max-w-sm md:max-w-md'>
            <div className='label'>
              <span className='label-text text-blue-500'>
                Password <strong>*</strong>
              </span>
            </div>
            <Field
              name='password'
              type='text'
              placeholder='Type password'
              className='input input-bordered border-blue-500 text-blue-500 w-full'
            />
            <ErrorMessage name='password' component={'div'} className='text-red-500' />
          </label>
          <button type='submit' className='btn bg-blue-500 text-white w-full max-w-xs sm:max-w-sm md:max-w-md'>
            Sign in
          </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
