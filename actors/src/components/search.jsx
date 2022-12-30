import React, {useState} from 'react'
import {Actor} from '../data/data';

const Search = () => {
    const [query, setQuery] = useState('')

    return (
        <div>
            <input type="search" placeholder='search' className='search' onChange={e=> setQuery(e.target.value)}/>
            <ul className='list'>
                {Actor.filter((actor) => 
                    actor.first_name.toLowerCase().includes(query)).map((actor) => (
                <li key={actor.id} className='listItem'>{actor.first_name}</li>))}
            </ul>
        </div>
    )
}

export default Search
