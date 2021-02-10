

    export const getGifts = async(category) => {
        //para que no tenga espacios va encode URi, en la busqueda
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=TltIzHthLndTvFMyQVJrlYFt4ZYlkCRV`;
        const res = await fetch( url );
        const {data} = await res.json();

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs; 
    }