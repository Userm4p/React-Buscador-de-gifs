export  const  getsGif = async ( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=25&key=AAa97hnxClzOyiPQWgjTRUUurgwbKZJk`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts = data.map(img => {
      return {
        id: img.id,
        url: img.images?.downsized_medium.url,
      }
    })
    

    
    return gifts;
    
  }