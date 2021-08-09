import '../scss/style.scss';

const url = 'https://api.imgflip.com/get_memes';

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json.data.memes[88].url));
