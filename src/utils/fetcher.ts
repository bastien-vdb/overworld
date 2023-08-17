export const fetcher = (url:string) => {
    
    return fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log('result', result);
        return result;
      })
      .catch((error) => {
        console.log(error);
        throw new error(error);
      });
  };

  export default fetcher;