import { createContext, useState } from "react"


export const GlobalContext= createContext(null);

export default function GlobalState({children}){
    
    const [searchItem,setSearchItem] = useState("");
    const [recipList,setRecipeList] = useState([]);
    const [itemDetails,setItemDetails] = useState();

    async function handleSubmit(e){
          e.preventDefault();
        try {
               
              const resp= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`)
              const data= await resp.json();

               if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                  setSearchItem("")
               }
        } catch (error) {
            console.log(error)
        }
    }
    

    return(

        <GlobalContext.Provider value={{searchItem,setSearchItem,handleSubmit,recipList,itemDetails,setItemDetails}}>
            {children}
        </GlobalContext.Provider>
    )
}
