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
        props.handleAddActor(false)
        console.log('close')
      }

  
    return (
      <section id='add'>
        <form className='flex flex-col text-black justify-center items-center  ' onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' onChange={handleChange} className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' />
            <label htmlFor="age">Age: </label>
            <input type="number" name='age' onChange={handleChange} className='px-5 py-3 w-48 border-0 ' />
            <label htmlFor="knownFor">Known For: </label>
            <input type="text" name='knownFor' onChange={handleChange} className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' />
            <label htmlFor="bio">Bio: </label>
            <input type="text" name='bio' onChange={handleChange} className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' /> 
            <label htmlFor="imageURL">Image: </label>
            <input type="text" name='imageURL' onChange={handleChange}className='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500' />
            <br/>
            <br/>
            <input type="submit" />
        </form>
        </section>
    )
}

export default Add 