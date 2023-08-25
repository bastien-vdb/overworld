export const fetcher = (url:string) => {
    
    return fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  export default fetcher;