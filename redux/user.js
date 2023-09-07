import {createSlice, createAsyncThunnk} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import Axios from 'axios'

const createUser = createAsyncThunnk(
    "user/createUser",
    async (userId) =>{
        console.log("created", userId);
     try{
        const response = await Axios.post('http://localhost:3005/users/',
        
        {
            ...userId,
        }, 
       
        );
     }catch {

     }
    }
)


const initialState ={
    users:[]
}