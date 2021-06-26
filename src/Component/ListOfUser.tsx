import React from 'react'
import { GET_ALL_USER } from "../Graphql/Queries"
import { useQuery } from "@apollo/client"
import userEvent from '@testing-library/user-event'

function ListOfUser() {

    const { data } = useQuery(GET_ALL_USER)
    if(data)
    {
        console.log(data)
    }
    return (
        <div>
            {data && data.getAllUsers.map((user: any) => 
            {
                return (
                    <div key = {user.id}>
                        {user.name} / {user.username}
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfUser
