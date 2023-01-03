import React, {useState} from 'react'
import Navbar from './components/navbar';
import Cards from './components/cards';
import Search from './components/search';
import Other from './components/other'
import {Actor} from './data/data';


function App() {
const [query, setQuery] = useState('')

const keys = ['first_name', 'DOB']
const search = (data) => {
   return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query))
   );
}

  return (

    <div className="App">
    <Navbar />
    <div className="grid grid-cols-3 pl-2 content-center">
    <Cards />
    <Cards />
    <Cards />

    </div>
    {/* seperate search function without returning multiple lines of data */}
    {/* <Search/> */}


{/* returning multiple lines of data/ searching all items stored locally..will have to link to a 3rd party api but should be (easy(i hope)) */}
    <div class='flex items-center flex-col py-16'>
       <input type="search" placeholder='search' class='w-full md:w-auto sm:w-auto h-9 '  onChange={e=> setQuery(e.target.value)}/>
       <br/>
       <Other data={search(Actor)}/>
    </div>
    </div>
  );
}

export default App;
