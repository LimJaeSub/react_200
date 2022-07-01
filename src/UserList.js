import React from 'react'

function UserList() {

    const users = [
        {
            id:1,
            name:'no1',
            phone:`01011111111`,
        },
        {
            id:2,
            name:'no2',
            phone:`01022222222`,
        },
        {
            id:3,
            name:'no3',
            phone:`01033333333`,
        },
        {
            id:4,
            name:'no4',
            phone:`01044444444`,
        },
    ]


  return (
    <div>
        <div>
            <b>{users[0].name}</b>
            <span>{users[0].phone}</span>
        </div>
        <div>
            <b>{users[1].name}</b>
            <span>{users[1].phone}</span>
        </div>
        <div>
            <b>{users[2].name}</b>
            <span>{users[2].phone}</span>
        </div>
        <div>
            <b>{users[3].name}</b>
            <span>{users[3].phone}</span>
        </div>
    </div>
  )
}

export default UserList