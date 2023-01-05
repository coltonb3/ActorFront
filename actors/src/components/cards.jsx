import React, { useState } from 'react'
import CardInfo from './card-info'
import Edit from './Edit'

const Cards = (props) => {

    const [infoDisplay, setInfoDisplay] = useState(false)
    
    const showInfo = () => {
        setInfoDisplay(!infoDisplay)
      }
      const [edit, setEdit] = useState(false)
    
      const hideInfo = () => {
            setInfoDisplay(!infoDisplay)
          console.log('test33');
      }
      
      const toggleEdit = () => {
          setEdit(!edit)
          console.log('edit');
      }
  
    return (
       <>
        <div onClick={showInfo} className='max-w-[1640px] mx-auto p-4 py-12 '>
            <div className='rounded-xl relative' key={props.actor.id}>
                <div className='absolute w-full h-full bg-black/400 rounded-xl text-white'>
                    {/* <p className='font-bold text 2xl px-2 pt-4 absolute bottom-0 left-0 ...'>{props.actor.name}</p> */}
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={props.actor.imageURL} alt='/' />

                {infoDisplay ?
                    <div>
                        <CardInfo getActors={props.getActors} actor={props.actor} actors={props.actors} infoDisplay={infoDisplay} setInfoDisplay={setInfoDisplay}/>

                    </div> 
                : null}
            

            </div>
            <button className='btn btn-blue' onClick={toggleEdit}>Edit Info</button>
            {edit ? //if edit is true, then bring up the edit form
        <div className='actors-modal'>
          <div className='actors-modal-box'>
            <Edit actor={props.actor} getActors={props.getActors} />
          </div>
        </div>
        : //if not, show the modal of the actor detail
        <div className='actors-modal'>
          <div className='actors-modal-box'>
            {/* <p>{props.actor.name}</p>
            <p><span>Age: </span>{props.actor.age}</p>
            <p><span>Known for: </span>{props.actor.knownFor}</p>
            <p><span>Bio: </span>{props.actor.bio}</p> */}
          </div>
          </div>
                    }
             <button onClick={hideInfo}>Close</button><br />
            <button className='btn btn-blue' onClick={props.handleDelete} value={props.actor.id}>Delete Actor</button><br/>
            </div>
               
       </>
    )
}

export default Cards


