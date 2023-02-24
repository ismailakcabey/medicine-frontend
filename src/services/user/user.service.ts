import axios from "axios"
export const postUser = async(value:any)=>{
    const {data} =  await axios.post(`http://localhost:3000/users`,value)
    return data
}

export const fetchUserList = async()=>{
    const {data} =  await axios.get(`http://localhost:3000/users`,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzIzNzI0MiwiZXhwIjoxNjc3MzIzNjQyfQ.VRHDVdX9566WO56gdcSdukNS8mKH4FKpMPSHtFdqmbo",
        },
    })
    return data
}

export const deleteUser = async(id:string)=>{
    const {data} =  await axios.delete(`http://localhost:3000/users/${id}`,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzIzNzI0MiwiZXhwIjoxNjc3MzIzNjQyfQ.VRHDVdX9566WO56gdcSdukNS8mKH4FKpMPSHtFdqmbo",
        },
    })
    return data
}

export const fetchUserById = async(id:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/users/${id}`,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzIzNzI0MiwiZXhwIjoxNjc3MzIzNjQyfQ.VRHDVdX9566WO56gdcSdukNS8mKH4FKpMPSHtFdqmbo",
        },
    })
    return data
}


export const updateUserById = async(id:any,req:any)=>{
    const {data} =  await axios.patch(`http://localhost:3000/users/${id}`,req,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzIzNzI0MiwiZXhwIjoxNjc3MzIzNjQyfQ.VRHDVdX9566WO56gdcSdukNS8mKH4FKpMPSHtFdqmbo",
        },
    })
    return data
}