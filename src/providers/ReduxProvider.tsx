'use client'

import { Provider } from 'react-redux'

import { store } from '../redux/store'

import { ReactNode } from 'react';
interface IReduxProviderProps {
    children: ReactNode; 
  }

const ReduxProvider = ({children}: IReduxProviderProps) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider