import axios from "axios";

import {baseURL} from "../configs";

const axiosService =axios.create({baseURL})

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWNlMDI2ZTliYjViYTJkNjNiNzVjYzhmOTczNTQzMCIsInN1YiI6IjYzNGFhMWFkNjg4Y2QwMDA3YzM4ZTkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHWNxvXPpi6PIkmwlUUgv0u3yZjN-eQFY2SIe_DXHjc"

axiosService.interceptors.request.use((config)=>{
    if (token){
    config.headers.Authorization = `Bearer ${token}`
    return config
    }
})

export  {
    axiosService
}