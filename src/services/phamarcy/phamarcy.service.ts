import axios from "axios"
export const fetchPhamarcyList = async()=>{
    const {data} =  await axios.get(`http://localhost:3000/phamarcy`)
    return data
}


export const fetchPhamarcyById = async(id:any)=>{
    const {data} =  await axios.get(`http://localhost:3000/phamarcy/${id}`)
    return data
}

export const fetchPhamarcyByIdDelete = async(id:any)=>{
    const {data} =  await axios.delete(`http://localhost:3000/phamarcy/${id}`)
    return data
}