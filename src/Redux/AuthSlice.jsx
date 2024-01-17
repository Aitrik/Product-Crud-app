import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { useNavigate } from "react-router-dom"

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  // redirectTo:null,
  isToggle:false,
  status:"idle"
  
};

export const register = createAsyncThunk(
  "/user/signup",


  // Action
  async (formData) => {
    let res = await axiosInstance.post(`/user/signup`, formData);

    let resData = res?.data;

    return resData;
  }
);

export const login = createAsyncThunk(
  "/user/signin",


  async (formData) => {
    let res = await axiosInstance.post(`/user/signin`, formData)

    let resData = res?.data
    return resData;
  }
)

// creating Slice
export const AuthSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    Token_remove: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("firstName")
      localStorage.removeItem("profile_pic");
      state.isToggle=false
      toast("Logged out successfully")
    },
    Check_Token: (state, { payload }) => {
      localStorage.getItem("token");
      state.isToggle = true;
      }
    ,
    // reset_redirectTo: (state, { payload }) => {
    //   state.redirectTo = payload;
    // },
  },

  // Promise 
  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        
            toast(payload.message)
            // localStorage.setItem("profile_pic", payload.data.profile_pic)

            // state.redirectTo='/login'
        

      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
          localStorage.setItem("token", payload.token);
          state.isToggle=true
          localStorage.setItem("profile_pic", payload.data.profile_pic)
          localStorage.setItem("firstName",payload.data.first_name);

          toast.success(payload.message);
          // state.redirectTo = '/productlist'
          

      } else {
          toast.error(payload.message);
      }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
      })



  },
});

export const {
  Token_remove,
  // reset_redirectTo,
  Check_Token
} = AuthSlice.actions;