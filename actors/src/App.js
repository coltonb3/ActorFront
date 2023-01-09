import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar';
import Cards from './components/cards';
import Search from './components/search';
import Other from './components/other'
import Add from './components/add'
import Edit from './components/Edit'
import {Actor} from './data/data';


function App() {
const [query, setQuery] = useState('')
const [actors, setActors] = useState([])
const [collectionDisplay, setCollectionDisplay] = useState(true)

const [searchInput, setSearchInput] = useState('')
const [filteredResults, setFilteredResults]  = useState([])


const searchItems = (searchValue) => {
  setSearchInput(searchValue)
  if (searchValue.length > 0) {
      const searchResults = actors.filter((results) => {
          return Object.values(results).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
  setFilteredResults(searchResults)
  } else {
  setFilteredResults(actors)
  }
}



const getActors = () => {
  axios.get('https://pacific-hollows-96763.herokuapp.com/api/actors')
    .then((response) => setActors(response.data),
    (err) => console.error(err))
     .catch((error) => console.error(error))
}

const handleCreate =(addActor) => {
  axios.post('https://pacific-hollows-96763.herokuapp.com/api/actors', addActor)
  .then((response) =>{
  getActors()
  })
}

const handleUpdate = (editActor) => {
  axios
    .put('https://pacific-hollows-96763.herokuapp.com/api/actors/'+ editActor.id, editActor)
    .then((response)=>{
      getActors()
    })
}

const handleDelete = (event) => {
  axios
    .delete('https://pacific-hollows-96763.herokuapp.com/api/actors/' + event.target.value)
    .then((response) => {
      getActors()
    })
}

useEffect(() => {
  getActors()
 }, [])

  return (
    <div className="App">

      <Navbar />
      
      {collectionDisplay ?
      
    <div className="grid grid-cols-3 pl-2 content-center">
       {filteredResults.map((actor) => {
        return (
          <>
          <Cards actor={actor} collectionDisplay={collectionDisplay} setCollectionDisplay={setCollectionDisplay} handleUpdate={handleUpdate} handleDelete={handleDelete} getActors={getActors}/>
          </>
        )
      })}
    </div> : null}
    <br/>
    <br/>
    <br/>
    <div className='flex flex-col text-black justify-center items-center'>
        <section id='search'>
        <form class='px-5 py-3 w-48 border-0 
            focus:outline-0 focus:w-full duration-500'>
        <label htmlFor="Search">Search</label> 
        <input type="text" onChange={(event) => searchItems(event.target.value)} />
          
        </form>
        </section>
      </div>

      <br/>
      <br/>
      <br/>
      <Add />
</div>
  );
}

export default App;