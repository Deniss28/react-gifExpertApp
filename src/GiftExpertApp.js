import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
    
    //const categories = ['Dragon Ball', 'One Punch Man', 'Baki'];

     const [categories , setCategories] = useState(['Love']);
     //spread matiene las categorias y añade un nuevo elemento
     //si cambias de posicion al spread agregas un nuevo elemnto en la 
     //posiscion 1
   /*  const handleAdd = () =>{
         //setCategories(['Clannad', ...categories]);
         //callback que regresa un nuevo arreglo con todas la categorias
         //regresa un nuevo estado
         setCategories(cats => [ ...cats, 'Clannad' ] );
     }*/ 

    return (
        <>
             <h2>GiftExpertApp</h2>
             <AddCategory setCategories={setCategories}/>
             <hr/>
            
             <ol>
                 {
                    categories.map( category => (
                        <GifGrid 
                        category={ category }
                        key={ category } 
                        /> //muestra el arreglo
                    ))
                 }
             </ol>
        </>
    )
}


export default GiftExpertApp
