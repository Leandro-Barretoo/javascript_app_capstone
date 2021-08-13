import '../scss/style.scss';
import addToGrid, { displayLikes } from './display.js';
import checkElems from './likes.js';
import displayData from './displayData.js';
import popup from './popup.js';
import getNumElems from './homeCounter.js';
import commentSubmit from './commentForm.js';

addToGrid(checkElems, getNumElems);
displayData(popup, commentSubmit);
displayLikes();
