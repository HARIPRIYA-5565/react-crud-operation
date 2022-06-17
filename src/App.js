import React, { useEffect } from 'react';
import { DataTable } from './Components/DataTable';
import { AddDataForm } from './Components/AddDataForm';
import { Edit } from './Components/Edit';

import ArrayData from './ArrayData';
import { useState } from 'react';

function App() {

  
  const [users,setUsers]=useState(ArrayData);
  const addUser=(user)=>{
    user.id=users.length+1;
    setUsers([...users,user])
  };
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id !==id));
  };
  const [edit,setEdit]=useState(false);
  const initialUser={id:null,name:"",username:""};
  const [currentUser,setCurrentUser]=useState(initialUser)
  const editUser=(id,user)=>{
    setEdit(true);
    setCurrentUser(user);
  };
  const updateUser=(newUser)=>{
    setUsers(
      users.map((user)=>(user.id===currentUser.id? newUser:user))
    );
    setCurrentUser(initialUser);
    setEdit(false);
  };
  return (
    <div className="flex gap-4 ml-5">
      <div className="mt-4">
      <Edit currentUser={currentUser} setEdit={setEdit} updateUser={updateUser}/></div>
      <div className="mt-4"><AddDataForm addUser={addUser}/></div>
      <div className="flex justify-center mt-4"><DataTable users={users} deleteUser={deleteUser} editUser={editUser}/></div>
      
    </div>
  );
}

export default App;
