import React from "react";

export function DataTable(props){
    return(
        <table>
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-5">ID</th>
                    <th className="p-5">Name</th>
                    <th className="p-5">Username</th>
                    <th className="p-5">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length>0 ? (
                    props.users.map(user=>{
                        const {id,name,username}=user;
                        return(
                            <tr>
                                <td className="p-5">{id}</td>
                                <td className="p-5">{name}</td>
                                <td className="p-5">{username}</td>
                                <td ><button className=" p-5 hover:bg-blue-500 rounded-lg" onClick={()=>props.deleteUser(user.id)}>Delete</button>
                                <button className="p-5 hover:bg-blue-500 rounded-lg" onClick={()=>props.editRow(user)}>Edit</button></td>
                            </tr>
                        )
                    }
              )
                ):(
                    <tr className="p-5"><td className="col-span-4"> No users found</td></tr>
                )
                 } 
                
            </tbody>
        </table>
    )

}