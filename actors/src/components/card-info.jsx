import React, { useState } from 'react'
import Edit from './Edit'
import axios from 'axios'

const CardInfo = (props) => {

    const [edit, setEdit] = useState(false)
    
    const hideInfo = () => {
        props.setInfoDisplay(false)
    }
    
    const toggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = (event) => {
        axios
          .delete('https://pacific-hollows-96763.herokuapp.com/api/actors/' + event.target.value)
          .then((response) => {
            props.getActors()
          })
      }

    return (
       <>
        {edit ? //if edit is true, then bring up the edit form
        <div className='actors-modal'>
          <div className='actors-modal-box'>
            <img className='actors-modal-img' src={props.actor.imageURL} alt="/" />
            <Edit />
          </div>
        </div>
        : //if not, show the modal of the actor detail
        <div className='actors-modal'>
          <div className='actors-modal-box'>
            <p>{props.actor.name}</p>
            <p><span>Age: </span>{props.actor.age}</p>
            <p><span>Known for: </span>{props.actor.knownFor}</p>
            <p><span>Bio: </span>{props.actor.bio}</p>
          </div>
          {/* <button className='btn btn-blue' onClick={() => [toggleEdit()]}>Edit Info</button>
          <button onClick={hideInfo}>Close</button><br />
          <button className='btn btn-blue' onClick={() => {handleDelete (props.actor)}}>Delete Actor</button><br/> */}
        </div>  
              }
      </>
    )
}

export default CardInfo