 import React from 'react'
 import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Nave from './components/Nave'
import Favorites from '../src/pages/favorites'
import Home from '../src/pages/home';
import Details from '../src/pages/details';

 const App = () => {
   return (
    <>  
      <BrowserRouter> 
      <Nave />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/favorites' element={< Favorites />} />
           <Route path='recipe-item/:id' element={<Details />} />
         </Routes>
         </BrowserRouter>
    </>
   )
 }
 
 export default App