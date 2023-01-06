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

      <Navbar handleCreate={handleCreate} />
      

      <div>
        <form class="bg-grey shadow-mb rounded px-5 pt-5 pb-6 mb-6">
          <input type="text" onChange={(event) => searchItems(event.target.value)} />
        </form>
      </div>


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

    {/* seperate search function without returning multiple lines of data */}
    {/* <Search/> */}



{/* returning multiple lines of data/ searching all items stored locally..will have to link to a 3rd party api but should be (easy(i hope)) */}
     {/* <div className='flex items-center flex-col py-16'>
//        <input type="search" placeholder='search' className='w-full md:w-auto sm:w-auto h-9 '  onChange={e=> setQuery(e.target.value)}/>
//        <br/>
//   <Other data={search(Actor)}/> */}
 

{/* returning multiple lines of data/ searching all items stored locally..will have to link to a 3rd party api but should be (easy(i hope)) */}
     {/* <div className='flex items-center flex-col py-16'>
//        <input type="search" placeholder='search' className='w-full md:w-auto sm:w-auto h-9 '  onChange={e=> setQuery(e.target.value)}/>
//        <br/>
//        <Other data={search(Actor)}/>
//      */}
    
</div>
  );
}

export default App;