
import { configureStore } from '@reduxjs/toolkit'

import { authenticationSlice } from './AuthSlice'

    export const store = configureStore({
        reducer:{
            contents:authenticationSlice.reducer
        }
    })
   