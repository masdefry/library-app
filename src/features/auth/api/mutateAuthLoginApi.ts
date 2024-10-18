import {useMutation} from '@tanstack/react-query'
import axios from 'axios';
import { ILoginForm } from '@/features/auth/types';

export interface IMutationProps {
  onSuccess: (data: any) => void;
  onError: (error: Error) => void;
}

export const mutateAuthLoginApi = ({onSuccess, onError}: IMutationProps) => {
    const {mutate: mutateAuthLogin, isPending: isPendingMutateAuthLogin} = useMutation({
        mutationFn: async(values: ILoginForm) => {
          return await axios.post('http://localhost:5000/auth', {
            username: values.username, 
            password: values.password
          })
        }, 
        onSuccess, 
        onError
    })

    return{
        mutateAuthLogin, 
        isPendingMutateAuthLogin
    }
}