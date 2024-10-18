import { mutateAuthLoginApi } from '../api/mutateAuthLoginApi'

export const mutateAuthLoginHook = () => {
    const onSuccessMutateAuthLoginApi = (res: any) => {
        console.log(res)
    }

    const onErrorMutateAuthLoginApi = (error: any) => {
        console.log(error)
    }

    const {
        mutateAuthLogin, 
        isPendingMutateAuthLogin
    } = mutateAuthLoginApi({
        onSuccess: onSuccessMutateAuthLoginApi, 
        onError: onErrorMutateAuthLoginApi
    })
    
    return{
        mutateAuthLogin, 
        isPendingMutateAuthLogin
    }
}