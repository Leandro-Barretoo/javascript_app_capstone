const displayOnGrid = (item) => {
  const gridContainer = document.querySelector('.grid-container');
  const itemContainer = document.createElement('div');
  itemContainer.setAttribute('class', 'item-container');
  const gridItem = document.createElement('div');
  gridItem.setAttribute('class', 'grid-item');
  const gridImage = document.createElement('img');
  gridImage.setAttribute('class', 'meme-img');
  gridImage.setAttribute('src', item.url);
  gridItem.appendChild(gridImage);
  const gridTitle = document.createElement('p');
  gridTitle.setAttribute('class', 'meme-title');
  gridTitle.innerHTML = item.name;
  gridItem.appendChild(gridTitle);
  const gridComments = document.createElement('input');
  gridComments.setAttribute('class', 'comment-btn');
  gridComments.setAttribute('id', item.id);
  gridComments.setAttribute('type', 'submit');
  gridComments.setAttribute('value', 'Comments');
  gridItem.appendChild(gridComments);
  itemContainer.appendChild(gridItem);
  gridContainer.appendChild(itemContainer);
};

const callApi = async () => {
  const request = await fetch('https://api.imgflip.com/get_memes');
  const data = await request.json();
  return data;
};

const addToGrid = async () => {
  const ans = await callApi();
  const memesArr = ans.data.memes;
  memesArr.splice(-6).forEach((item) => {
    displayOnGrid(item);
  });
};

export default addToGrid;