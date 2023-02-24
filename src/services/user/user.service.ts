import axios from "axios"
export const postUser = async(value:any)=>{
    const {data} =  await axios.post(`http://localhost:3000/users`,value)
    return data
}

export const userLogin = async(value:any)=>{
    const {data} =  await axios.post(`http://localhost:3000/users/login`,value)
    return data
}

export const fetchUserList = async(token:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/users`,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}

export const deleteUser = async(id:string,token:any)=>{
    const {data} =  await axios.delete(`http://localhost:3000/users/${id}`,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}

export const fetchUserById = async(id:any , token:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/users/${id}`,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}


export const updateUserById = async(id:any,req:any , token:any)=>{
    const {data} =  await axios.patch(`http://localhost:3000/users/${id}`,req,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}