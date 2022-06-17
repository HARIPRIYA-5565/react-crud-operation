import React, { useEffect } from 'react';
import { DataTable } from './Components/DataTable';
import { AddDataForm } from './Components/AddDataForm';
import { Edit } from './Components/Edit';

import ArrayData from './ArrayData';
import { useState } from 'react';

function App() {

  const initialUser={id:null,name:'',username:''}
  const [users,setUsers]= useState(ArrayData)
  const [currentUser,setCurrentUser]= useState(initialUser)
  const [edit,setEdit]= useState(false)



  const addUser=user=>{
    user.id=users.length+1
    setUsers([...users,user])
  }
  const deleteUser=id=>{
    setEdit(false)
    setUsers(users.filter(user=>user.id !==id))
  }
  const updateUser=(id,updatedUser)=>{
    setEdit(false)
    setUsers(users.map(user=>(user.id===id? updatedUser:user)))
  }
  const editRow=(user)=>{
    setEdit(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }
  return (
    <div className="flex gap-4 ml-5">
      {edit?(
      <div className="mt-4">
      <Edit edit={edit} setEdit={setEdit} currentUser={currentUser} updateUser={updateUser}/></div>):(
      <div className="mt-4"><AddDataForm addUser={addUser}/></div>)}
      <div className="flex justify-center mt-4"><DataTable users={users} editRow={editRow} deleteUser={deleteUser}/></div>
      
    </div>
  );
}

export default App;
