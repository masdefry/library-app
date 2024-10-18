'use client';

import { Provider } from "react-redux";

export default function ReduxProvider({children}){
    return(
        <Provider store={reduxStore}>
            {children}
        </Provider>
    )
}