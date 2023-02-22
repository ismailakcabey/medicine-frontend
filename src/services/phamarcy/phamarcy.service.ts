import axios from "axios"
export const fetchPhamarcyList = async()=>{
    const {data} =  await axios.get(`http://localhost:3000/phamarcy`,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzA2MzU2MywiZXhwIjoxNjc3MTQ5OTYzfQ.TEaUyhKvRZ6e0H1FhzWMMVyJC2sCBy5xlZ2Z6y3ov6U",
        },
    })
    return data
}


export const fetchPhamarcyById = async(id:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/phamarcy/${id}`,
    {
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzA2MzU2MywiZXhwIjoxNjc3MTQ5OTYzfQ.TEaUyhKvRZ6e0H1FhzWMMVyJC2sCBy5xlZ2Z6y3ov6U",
        },
    }
    )
    return data
}

export const fetchPhamarcyByIdDelete = async(id:any)=>{
    const {data} =  await axios.delete(`http://localhost:3000/phamarcy/${id}`,
    {
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzA2MzU2MywiZXhwIjoxNjc3MTQ5OTYzfQ.TEaUyhKvRZ6e0H1FhzWMMVyJC2sCBy5xlZ2Z6y3ov6U",
        },
    })
    return data
}

export const fetchPhamarcyByIdUpdate = async(id:any,req:any)=>{
    const {data} =  await axios.patch(`http://localhost:3000/phamarcy/${id}`,req,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzA2MzU2MywiZXhwIjoxNjc3MTQ5OTYzfQ.TEaUyhKvRZ6e0H1FhzWMMVyJC2sCBy5xlZ2Z6y3ov6U",
        },
    })
    return data
}

export const fetchPhamarcyCreate = async(req:any)=>{
    console.log("fetchde")
    const {data} =  await axios.post(`http://localhost:3000/phamarcy/`,req,{
        withCredentials: true,
        headers:{
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3MzI4MGYxNDYyZmMyNWM0NTc4MSIsImlhdCI6MTY3NzA2MzU2MywiZXhwIjoxNjc3MTQ5OTYzfQ.TEaUyhKvRZ6e0H1FhzWMMVyJC2sCBy5xlZ2Z6y3ov6U",
        },
    })
    return data
}


