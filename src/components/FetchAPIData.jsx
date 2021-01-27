import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchURL =
  'http://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions';

const FetchData = () => {
  const [entries, setEntries] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(fetchURL);
    setEntries(response.data);
  };
  console.log('FetchAPIData: ', entries);
  return entries;
};

export default FetchData;
