import '../scss/style.scss';
import addToGrid, { displayLikes } from './display.js';
import checkElems from './likes.js';
import displayData from './displayData.js';
import popup from './popup.js';

addToGrid(checkElems);
displayData(popup);
displayLikes();
