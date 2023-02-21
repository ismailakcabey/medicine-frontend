import axios from "axios"
export const postUser = async(value:any)=>{
    const {data} =  await axios.post(`http://localhost:3000/users`,value)
    return data
}