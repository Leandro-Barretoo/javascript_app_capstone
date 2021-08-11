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
  const titleLike = document.createElement('div');
  titleLike.setAttribute('class', 'title-likes');
  const gridTitle = document.createElement('p');
  gridTitle.setAttribute('class', 'meme-title');
  gridTitle.innerHTML = item.name;
  titleLike.appendChild(gridTitle);
  const likeIcon = document.createElement('i');
  likeIcon.setAttribute('class', `${item.id} far fa-heart`);
  titleLike.appendChild(likeIcon);
  const numLikes = document.createElement('span');
  numLikes.innerHTML = 0;
  titleLike.appendChild(numLikes);
  const gridComments = document.createElement('input');
  gridComments.setAttribute('class', 'comment-btn');
  gridComments.setAttribute('id', item.id);
  gridComments.setAttribute('type', 'submit');
  gridComments.setAttribute('value', 'Comments');
  gridItem.appendChild(titleLike);
  gridItem.appendChild(gridComments);
  itemContainer.appendChild(gridItem);
  gridContainer.appendChild(itemContainer);
};

const callApi = async () => {
  const request = await fetch('https://api.imgflip.com/get_memes');
  const data = await request.json();
  return data;
};

export const displayLikes = async () => {
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/likes');
  const likes = await request.json();
  const arr = document.querySelectorAll('.fa-heart');
  likes.forEach((item) => {
    arr.forEach((arrItem) => {
      const idItem = arrItem.className.split(' ')[0];
      if (idItem === item.item_id) {
        arrItem.nextSibling.innerHTML = item.likes;
      }
    });
  });
};

const addToGrid = async (callback, callbackOne) => {
  const ans = await callApi();
  const memesArr = ans.data.memes;
  memesArr.splice(-6).forEach((item) => {
    displayOnGrid(item);
  });
  callback();
  callbackOne();
};

export default addToGrid;