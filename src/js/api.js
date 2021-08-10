const apiUrl = 'https://api.imgflip.com/get_memes';

const getApiData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const dataArray = data.data.memes;
  return dataArray;
};

export default getApiData;