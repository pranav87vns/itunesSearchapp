import { useEffect, useState } from 'react';
import axios from 'axios';



export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {

      axios.create({
        baseURL: 'https://itunes.apple.com/search?term=',
        
      });
      
      const response = await axios.get('/baseURL/${value}', {
       
      });
      setResults(response.data.value);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi('musicVideo');
  }, []);

  return [searchApi, results, errorMessage];
};
