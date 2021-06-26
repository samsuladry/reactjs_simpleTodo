import React from 'react'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutation';

function CreateUser() {

      const [name, setName] = useState("");
      const [username, setUsername] = useState("")
      const [password, setPassword] = useState("")
      
      const [createUser, { error }] = useMutation(CREATE_USER)
    
      const createUserfunction = () =>
      {
        createUser({
          variables: 
          {
            name: name,
            username: username,
            password: password,
          }
        })
      }

    return (
        <div className="createUser">
            <input type="text" placeholder="name" onChange= { (event) => { setName(event.target.value) }}/>
            <input type="text" placeholder="username" onChange= { (event) => { setUsername(event.target.value) }}/>
            <input type="password" placeholder="password" onChange= { (event) => { setPassword(event.target.value) }}/>
            <button onClick = { createUserfunction }>Create User</button>
        </div>
    )
}

export default CreateUser
