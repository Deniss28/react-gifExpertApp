/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useFetchGift } from '../hooks/useFetchGift';
//import { getGifts } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    //use Effect ejecutar codigo de manera condicional
    //se ejecuta la peticion cuando el objeto es renderizado
    //por primera vez
    const {data:images, loading} = useFetchGift( category );
    
    
    //arreglo de dependencias


    
    return (
        <>
         <h3 className= "card animate__animated animate__backInUp">{ category }</h3>
         { loading && <p className="card animate__animated animate__flash">loading</p> }
         <div className="card-grid">
            
            <ol>
                {
                   images.map( img => (
                    <GifGridItem 
                         key={ img.id }
                         {...img } //propiedad independiente 
                    />                    
                   ))
                }
               
            </ol>
            </div>
        </>
        
    )
}
