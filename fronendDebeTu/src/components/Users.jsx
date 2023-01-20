import { useState, useEffect } from "react"
import { fetchAllUsers, addNewUser } from "../services/userService"


const Users = () => {
    const [users, setUsers] = useState([])
    const [u, setU] = useState("")
    const [p, setP] = useState("")

    async function peticion(){
        const json = await fetchAllUsers()
        setUsers(json)
        console.log('se ha llamado a peticion')
    }

    useEffect( ()=>{ 
        peticion()
    } ,  [] )

    useEffect( ()=>{
        setInterval( peticion ,   2000  )
    } ,  [] )




    const handleSubmit = async (e) =>{
       e.preventDefault()
       const newUser = await addNewUser({u})
       console.log(newUser)
       
       setUsers( [...users, newMessage] )
       setU("")
       setP("")
       
    }

    return (
        <>
            <h1>Lista de usuarios</h1>
            <div>
                {
                users.map(user => 
                    <div key={user._id}>{user.name}</div>
                )
                }
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input type="text" name="name" 
                value={u} onChange={(e)=>setU(e.target.value)}/>
                <input type="password" name="pass" 
                value={p} onChange={(e)=>setP(e.target.value)}/>
                <button type="submit">Registrarse</button>
            </form>

        </>
    )
}
export default Users