import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from '../context/context'

const Nave = () => {
     const {searchItem,setSearchItem,handleSubmit,}= useContext(GlobalContext);
  return (
    <>
         <nav className='w-full p-4 bg-slate-500 flex justify-between'>
              <h1 className='font-bold'>foodRecipies</h1>

              <form action="" onSubmit={handleSubmit}> 
              <input type='text' 
              className='outline-sky-400 w-52 p-1 rounded-lg shadow-xl' 
              placeholder='Search Something.....'
              value={searchItem}
              onChange={(e)=>{setSearchItem(e.target.value)}}
              /> 
              </form>

              <ul className='flex gap-2 font-bold'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/favorites'>Favorites</Link>
                  </li>
              </ul>
         </nav>
    </>
  )
}

export default Nave