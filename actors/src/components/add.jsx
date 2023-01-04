import React, {useState, useEffect} from 'react'

const Add = (props) => {
    let newActor = { name: '', age: '', knownFor: '', bio: '', imageURL: ''}
    const [actor, setActor] =useState(newActor)
    const handleChange = (event) => {
        setActor({...actor, [event.target.name]: event.target.value})
      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(actor)
      }


    return (
        <>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' value={actor.name} onChange={handleChange} />
            <label htmlFor="age">Age: </label>
            <input type="number" name='age' value={actor.age} onChange={handleChange} />
            <input type="submit" />
            <label htmlFor="knownFor">Known For: </label>
            <input type="text" name='knownFor' value={actor.knownFor} onChange={handleChange} />
            <label htmlFor="bio">Bio: </label>
            <input type="text" name='bio' value={actor.bio} onChange={handleChange} /> 
            <label htmlFor="imageURL">Image: </label>
            <input type="text" name='image' value={actor.imageURL} onChange={handleChange} />
        </form>
        </>
    )
}

export default Add
