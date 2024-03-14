
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from '../Helper/Helper'



    const initialState = {
        upload_status: "idle",
        upload_message: "idle",
        redirectContact: null,
        redirectTo: null,
        isloggedIn: false,
        isinRegistration: false
    };

   export const register = createAsyncThunk(
        "/register",
        async (formdata) => {
            let res = await axiosInstance.post("/signup", formdata);
            let resData = res?.data;
            return resData;
        }
    );
  export  const login = createAsyncThunk(
        "/login",
        async (formdata) => {
            let res = await axiosInstance.post("/signin", formdata);
            let resData = res?.data;
            return resData;
        }
    );

 export const authenticationSlice = createSlice({
        name: 'authentication',
        initialState,

        reducers: {
            reset_redirectTo: (state, { payload }) => {
                state.redirectTo = payload;
            },
            check_token: (state, { payload }) => {
                let token = localStorage.getItem('token');
                if (token !== null && token !== undefined) {
                    state.isloggedIn = true;
                }
            },
            handleLoggedout: (state, { payload }) => {
                localStorage.removeItem('token');
                state.isloggedIn = false;
            },
            reset_redirectContact: (state, { payload }) => {
                state.redirectContact = payload;
            },
            check_myname: (state, { payload }) => {
                let name = localStorage.getItem('name');
                if (name !== null && name !== undefined) {
                    state.isinRegistration = true;
                }
            },
            handleredirectContact: (state, { payload }) => {
                localStorage.removeItem('name');
                state.isinRegistration = false;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(login.pending, (state, { payload }) => {
                    state.status = 'loading';
                })
                .addCase(login.fulfilled, (state, { payload }) => {
                    if(payload.status==200){
                    state.status = 'idle';
                    state.redirectTo = "/"
                    state.isloggedIn = true;
                    localStorage.setItem('token', payload?.token)
                    localStorage.setItem('first_name', payload?.data.first_name)
                    }
                })
                .addCase(login.rejected, (state, { payload }) => {
                    state.status = 'idle';
                })


                .addCase(register.pending, (state, { payload }) => {
                    state.status = 'loading';
                })
                .addCase(register.fulfilled, (state, { payload }) => {
                    state.status = 'idle';
                    localStorage?.setItem('name', payload?.data.first_name)
                    state.isinRegistration = true;
                    state.redirectContact = '/login';
                })
                .addCase(register.rejected, (state, { payload }) => {
                    state.status = 'idle';
                })
        }
    });

    
export const{
    reset_redirectTo,
    reset_redirectContact,
    check_token,
    check_myname,
    handleLoggedout,
    handleredirectContact,
}= authenticationSlice.actions;

