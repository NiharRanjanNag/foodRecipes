import React from "react";
import {Link} from 'react-router-dom';

const ListItem = ({item}) => {
   
  return (
    <>
      
       
        <div className="w-80 h-max p-5 shadow-lg mt-1 bg-white flex flex-col gap-2 rounded-2xl">
          <div className="h-40 w-full bg-black flex justify-center rounded-lg">
            <img src={item.image_url} alt="recipes img" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sky-700">{item.publisher}</p>
            <h1 className="text-xl font-bold">{item.title}</h1>
             
              <Link className="w-48 text-white uppercase rounded-lg p-2 bg-black" to={`recipe-item/${item.id}`}>recipies details</Link>
             
          </div>
        </div>
      
    </>
  );
};

export default ListItem;
