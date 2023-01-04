import React, {useState, useEffect} from 'react'

const Add = (props) => {
    let newActor = { name: '', age: Number, knownFor: '', bio: '', imageURL: ''}
    const [actor, setActor] = useState(newActor)

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
            <input type="text" name='name' onChange={handleChange} />
            <label htmlFor="age">Age: </label>
            <input type="number" name='age' onChange={handleChange} />
            <input type="submit" />
            <label htmlFor="knownFor">Known For: </label>
            <input type="text" name='knownFor' onChange={handleChange} />
            <label htmlFor="bio">Bio: </label>
<<<<<<< HEAD
            <input type="text" name='bio' value={actor.bio} onChange={handleChange} /> 
            <label htmlFor="imageURL">Image: </label>
            <input type="text" name='image' onChange={handleChange} />
=======
            <input type="text" name='bio' onChange={handleChange} /> 
            <label htmlFor="imageURL">Image: </label>
            <input type="text" name='imageURL' onChange={handleChange} />
>>>>>>> 34c36ad334206c9b4a0cb039eaa61aaa89f52c61
            <br/>
            <br/>
            <input type="submit" />
        </form>
        </>
    )
}

export default Add
