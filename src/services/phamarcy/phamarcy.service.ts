import axios from "axios"
export const fetchPhamarcyList = async(token:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/phamarcy`,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}


export const fetchPhamarcyById = async(id:any , token:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/phamarcy/${id}`,
    {
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    }
    )
    return data
}

export const fetchPhamarcyByIdDelete = async(id:any , token:any)=>{
    const {data} =  await axios.delete(`http://localhost:3000/phamarcy/${id}`,
    {
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}

export const fetchPhamarcyByIdUpdate = async(id:any,req:any,token:any)=>{
    const {data} =  await axios.patch(`http://localhost:3000/phamarcy/${id}`,req,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}

export const fetchPhamarcyCreate = async(req:any,token:any)=>{
    console.log("fetchde")
    const {data} =  await axios.post(`http://localhost:3000/phamarcy/`,req,{
        withCredentials: true,
        headers:{
            Authorization: token,
        },
    })
    return data
}


