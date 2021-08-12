// import '../scss/style.scss';
import addToGrid, { displayLikes } from './display.js';
import checkElems from './likes.js';
import displayData from './displayData.js';
import popup from './popup.js';
import getNumElems from './homeCounter.js';

addToGrid(checkElems, getNumElems);
displayData(popup);
displayLikes();

// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/comments', {
//   method: 'POST',
//   body: JSON.stringify({
//     item_id: 61581,
//     username: 'Ahmet',
//     comment: 'This so funny',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => {console.log(json)});