import getApiData from './getApi.js';

const displayApi = () => { 
  getApiData().then((response) => console.log(response[0].url));
};

export default displayApi;