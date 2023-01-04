import React from 'react'

const Cards = (props) => {
    return (
        <div className="grid grid-cols-3 pl-2 content-center">
            {props.actors.map((actor) => {
                return(
                    <div className='max-w-[1640px] mx-auto p-4 py-12 '>
                        <div className='rounded-xl relative' key={actor.id}>
                            <div className='absolute w-full h-full bg-black/400 rounded-xl text-white'>
                                <p className='font-bold text 2xl px-2 pt-4 absolute bottom-0 left-0 ...'>{actor.name}</p>
                            </div>
                            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={actor.imageURL} alt='/' />
                        </div>
                    </div>
                )
            })}
        </div> 
    
    )
}

export default Cards


