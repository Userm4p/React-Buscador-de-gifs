import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpert = () => {


    const [categories, setCategories] = useState(['Anime']);
    
    return(
        <>
            <h1 className="animate__animated animate__pulse"> {'Buscador de Gifs'} </h1> 
            <AddCategory setCategories={setCategories}/>                                                                                                                                                                                                   
            <hr/>
            
            <ol>
                {
                      
                    categories.map(category  => 
                    
                        <GifGrid 

                            key={category}
                            category={category}

                        />
                        
                    )
                        
                }
            </ol>

        </>
    )
    
}

export default GiftExpert;