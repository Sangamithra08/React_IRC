import { useNavigate } from 'react-router-dom'
import '../assets/css/Users.css'
import { getUser, deleteUser } from '../services/api'
import { useState, useEffect } from 'react'
const Users = () => {
    const navigate=useNavigate()
    const [user, setUser] = useState([])
    const handleDelete=async(id)=>{
        try{
            const res= await deleteUser(id)
            if(res.status === 200)
            {
                alert("user deleted successfully")
            }
            fetchData()
        }
        catch(e)
        {
            console.log(e)
        }
    }
  
    const handleEdit = (id)=>{
        navigate(`/edit/${id}`)
    }
    const handleAdd=()=>{
        navigate('/add')
    }
    const fetchData = async () => {
        try {
            const res = await getUser()
            setUser(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    console.log(user)
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <p>this is add user</p>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th> Edit</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td><button className="edit-btn" onClick={()=>handleEdit(user.id)}>Edit</button></td>
                            <td><button className="del-btn" onClick={()=>handleDelete(user.id)}>Delete</button></td>
                        </tr>

                    ))
                    }
                </tbody>
            </table>
            <button onClick={handleAdd} type='submit' className='edit-btn'>Add user</button>
            
        </>
    )
}
export default Users