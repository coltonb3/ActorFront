import React, {useState} from 'react'
const Other  = ({data}) => {

    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>DOB</th>
            </tr>
            {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.DOB}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Other ;
