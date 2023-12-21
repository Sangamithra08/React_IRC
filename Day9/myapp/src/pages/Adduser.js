import { addUser } from "../services/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Adduser=()=>{
    const navigate=useNavigate()
    const[data,setData]=useState({
        username:'',
        password:''
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await addUser(data)
            if(res.status===201)
            {
                alert("User added successfully")
                navigate('/')
            }
        }
        catch(e)
        {
            console.log(e)
        }
        console.log(data)
    }
    return(
        <>
        <p>this is add user</p>
        <form onSubmit={handleSubmit}>
            <input type="text" id="username" placeholder="username" onChange={handleChange}/>
            <input type="password" id="password" placeholder="password"  onChange={handleChange}/>
            <button type="submit" className="submit-btn">Add</button>

        </form>
        </>
    )
}
export default Adduser