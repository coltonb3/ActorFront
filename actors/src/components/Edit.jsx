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
            <details className='flex flex-col text-black justify-center items-center'>
                <summary>Edit Actor</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' value={actor.name} onChange={handleChange}/>
                    <br />
                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' value={actor.age} onChange={handleChange}/>
                    <br />
                    <label htmlFor="knownFor">Known For: </label>
                    <input type="text" name="knownFor" className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' value={actor.knownFor} onChange={handleChange}/>
                    <br />
                    <label htmlFor="bio">Bio: </label>
                    <input type="text" name="bio" className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' value={actor.bio} onChange={handleChange}/>
                    <br />
                    <label htmlFor="imageURL">Image: </label>
                    <input type="text" name="imageURL" className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' value={actor.imageURL} onChange={handleChange}/>
                    <input type="submit"/>
                </form>
            </details>
                        <button className='btn btn-blue' onClick={props.handleDelete} value={props.actor.id}>Delete Actor</button><br/>
        </>
        
    )
}

export default Edit 