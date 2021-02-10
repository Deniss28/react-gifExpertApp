
//los hooks nno son mas que funciones 
//puedn tener un estado, y le dicen a los componentes cuando
//renderizarse porque algo cambio

import { useEffect, useState } from 'react';
import  { getGifts } from  '../helpers/getGif';


export const useFetchGift = ( category ) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    
    useEffect(() =>{
        
        getGifts( category )
                .then( imgs => {

                    setTimeout(() =>{
                        setstate({
                            data: imgs,
                            loading: false
                        }); 
                    }); 
                    
                })

    }, [ category ]);

    return state; //{dta:[], loading:true}
}
    