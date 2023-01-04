import React from 'react'

const Cards = (props) => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 '>
            {props.actors.map((actor) => {
                return(
                    <div className='rounded-xl relative' key={actor.id}>
                        <div className='absolute w-full h-full bg-black/400 rounded-xl text-white'>
                            <p className='font-bold text 2xl px-2 pt-4'>{actor.name}</p>
                        </div>
                    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={actor.imageURL} alt='/' />
                    </div>
                    
                )
            })}
        </div> 
    )
}

export default Cards

