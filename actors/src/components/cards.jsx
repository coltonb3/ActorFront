import React, { useState } from 'react'
import CardInfo from './card-info'
import axios from 'axios'

const Cards = (props) => {

    const [infoDisplay, setInfoDisplay] = useState(false)
    
    const showInfo = () => {
        setInfoDisplay(true)
      }

    return (
       <>
        <div onClick={showInfo} className='max-w-[1640px] mx-auto p-4 py-12 '>
            <div className='rounded-xl relative' key={props.actor.id}>
                <div className='absolute w-full h-full bg-black/400 rounded-xl text-white'>
                    <p className='font-bold text 2xl px-2 pt-4 absolute bottom-0 left-0 ...'>{props.actor.name}</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={props.actor.imageURL} alt='/' />

                {infoDisplay ?
                    <div>
                        <CardInfo getActors={props.getActors} actor={props.actor} actors={props.actors} infoDisplay={infoDisplay} setInfoDisplay={setInfoDisplay}/>
                    </div> 
                : null}

            </div>
        </div>
       </>
    )
}

export default Cards


