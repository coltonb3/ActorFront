import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar';
import Cards from './components/cards';
import Search from './components/search';
import Other from './components/other'
import Add from './components/add'
import {Actor} from './data/data';


function App() {
const [query, setQuery] = useState('')
const [actors, setActors] = useState('')
const keys = ['first_name', 'DOB']

// search feature 
// const search = (data) => {
//    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query))
//    );
// }

const handleCreate =(addActor) => {
  axios.post('https://pacific-hollows-96763.herokuapp.com/api/actors', addActor)
  .then((response) => {
  console.log(response)
  getActors()
  })
}

const getActors = () => {
  axios.get('https://pacific-hollows-96763.herokuapp.com/api/actors')
  .then((response) => setActors(response.data),
  (err) => console.error(err)
  )
  .catch((error) => console.error(error))
  console.log(actors)
}

useEffect(() => {
  getActors()
 }, [])

  return (

    <div className="App">
    <Navbar />
    <div className="grid grid-cols-3 pl-2 content-center">
    <Cards />
    <Cards />
    <Cards />
    <Add handleCreate={handleCreate}/>
      {/* <div className='list'>
      {actors.map((actors) => {
        return(
          <div className='actor' key={actors.id}>
            <h1>Name: {actors.name}</h1>
            </div>
        )
      })}
    </div> */}
    

    </div>
    {/* seperate search function without returning multiple lines of data */}
    {/* <Search/> */}


{/* returning multiple lines of data/ searching all items stored locally..will have to link to a 3rd party api but should be (easy(i hope)) */}
    {/* <div className='flex items-center flex-col py-16'>
       <input type="search" placeholder='search' className='w-full md:w-auto sm:w-auto h-9 '  onChange={e=> setQuery(e.target.value)}/>
       <br/>
       <Other data={search(Actor)}/>
    </div> */}
    </div>
  );
}

export default App;
