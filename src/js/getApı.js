const apiUrl = 'https://api.imgflip.com/get_memes';

const getApı = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const dataArray = data.data.memes;
  return dataArray;
};

export default getApı;