import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Edit =(props) =>{

    const [actor, setActor] = useState({...props.actor})

    const handleChange = (event) =>{
        setActor({...actor, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        handleUpdate(actor)
    }
    const handleUpdate = (editActor) => {
        console.log(editActor)
        axios
          .put('https://pacific-hollows-96763.herokuapp.com/api/actors/'+ editActor.id, editActor)
          .then((response)=>{
            props.getActors()
          })
      }
    
    return(
        <>
            <details>
                <summary>Edit Actor</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={actor.name} onChange={handleChange}/>
                    <br />
                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" value={actor.age} onChange={handleChange}/>
                    <br />
                    <label htmlFor="knownFor">Known For: </label>
                    <input type="text" name="knownFor" value={actor.knownFor} onChange={handleChange}/>
                    <br />
                    <label htmlFor="bio">Bio: </label>
                    <input type="text" name="bio" value={actor.bio} onChange={handleChange}/>
                    <br />
                    <label htmlFor="imageURL">Image: </label>
                    <input type="text" name="imageURL" value={actor.imageURL} onChange={handleChange}/>
                    <input type="submit"/>
                </form>
            </details>

        </>
    )
}

export default Edit 