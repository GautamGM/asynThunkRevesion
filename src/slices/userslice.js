import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../ApiInstance/apiInstance";
import {faker}  from "@faker-js/faker"

// get user from the database
export const getUser=createAsyncThunk(
    "user/getUser",async()=>{
        try{
            const res=await api.get("/user")
           if(res.status===200){
            return res.data
           }

        }catch(error){
            console.log("eroor",error.message)
            return error.message
        }
    }
)


// create user using post 
export const createUser=createAsyncThunk(
    "user/createUser",async() => {
        console.log("nter in the faker")
        
         try{
            const res=await api.post("user/",{
                name:faker.name.fullName()
             })
             return res.data
         }catch(error){
            console.log(error)
         }
         
    }
)

// slice of the user
const userSlice=createSlice({
    name:"user",
    initialState:({
        userData:[],
        isLoading:true,
        error:null
    }),

    // get user
    extraReducers(builder){
        builder
        .addCase(getUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            console.log("dafag")
            console.log(action.payload,"payload")
            state.userData=action.payload
            state.isLoading=false
        })
        .addCase(getUser.rejected,(state)=>{
            state.isLoading=false
            state.userData=[]
        })

        .addCase(createUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createUser.fulfilled,(state,action)=>{
            console.log(action.payload,"create user in extra reduser")
            state.userData.push(action.payload)
            state.isLoading=false
        })
        .addCase(createUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
            console.log(action.payload,"error in create user")
        })

    }

    
    
})
export const  userReducer=userSlice.reducer