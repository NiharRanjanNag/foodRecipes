import React, { useContext, useEffect} from 'react'
import {useParams}  from 'react-router-dom';
import { GlobalContext } from '../../context/context';

const Details = () => {
     const {id} = useParams();
     const {itemDetails,setItemDetails} = useContext(GlobalContext);
     useEffect(()=>{
        async function Details(){
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data= await response.json();
            
            if(data?.data){
                setItemDetails(data?.data)
            }
             
        }
    
        Details()
        console.log(itemDetails)

     })
     
  return (
     <>
        
           <div >
                  <div className='h-96 bg-slate-600'>
                      <img src={itemDetails?.recipe?.image_url} alt="" className='h-full' />
                  </div>
                  <div className='p-5 flex flex-col gap-3'>
                      <p className='text-sky-600 font-bold'> Simply Recipes</p>
                       <h1 className='font-bold text-2xl'>Banana Cookies</h1>
                  </div>
           </div>
           
     </>
  )
}

export default Details