import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function Edit(props){
    useEffect(()=>{
        setUser(props.currentUser)

    },[props])
    const [user,setUser]=useState(props.currentUser);
    const handleChange=e=>{
        const {name,value}=e.target;
        setUser({...user,[name]: value});
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(user.name&&user.username)props.updateUser(user);
    }
    return(
        <form >
        
        <div className="max-w-md w-full mx-auto shadow rounded-lg p-7 space-y-6">
					<div className="flex flex-col">
						<label className="text-sm font-bold text-gray-600 mb-1">
							
							Name
						</label>
						<input
							className=" border-2 rounded-lg px-3 py-1 hover:border-indigo-600"
							type="text"
							name="name"
							id="name"
                            value={user.name}
                            onChange={handleChange}
							placeholder="Enter Your Name"
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-sm font-bold text-gray-600 mb-1">
						
							Username
						</label>
						<input
							className=" border-2 rounded-lg px-3 py-1 hover:border-indigo-600"
							type="text"
							name="username"
							id="username"
                            value={user.username}
                            onChange={handleChange}
							placeholder="Enter Your Username"
						/>
					</div>
                    <button className="w-28 bg-indigo-600 text-white rounded-md p-2  hover:bg-blue-700" type="submit" onClick={handleSubmit} >Edit User
                     </button>
                     <button className="w-28 bg-indigo-600 text-white rounded-md p-2  hover:bg-blue-700 ml-2" type="submit" onClick={()=>props.setEditing(false)}>Cancel
                     </button>
                    </div>
                    </form>
    )
}