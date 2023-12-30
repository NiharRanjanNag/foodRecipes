import React, { useContext } from 'react'
import {GlobalContext} from '../../context/context.js'
import ListItem from '../../components/ListItem.jsx'

const Home = () => {
   
   const {recipList} = useContext(GlobalContext)

  return (
    <> 
        <div className='w-full container p-8 mx-auto flex flex-wrap justify-center gap-10'>
                   {
                      recipList && recipList.length > 0 ?
                      recipList.map((item)=>{
                        return (
                           <ListItem item={item} key={item.id} />
                        )
                          
                      })  
                      : <h1 className='font-bold text-3xl text-center'>Nothing To Show.Please Search Something.....</h1>
                   }
        </div>
    </>
  )
}

export default Home