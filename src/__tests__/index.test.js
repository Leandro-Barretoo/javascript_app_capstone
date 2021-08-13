import { expect } from '@jest/globals';
import getNumElems from '../js/homeCounter.js';

describe('number of items', () => {
  test('displays on the page', () => {
    document.body.innerHTML = '<div class="nav-link">'
    + '<span class="num-main-title">Fun Memes</span>'
    + '<div class="grid-container">'
    + '<div class="item-container"></div>'
    + '<div class="item-container"></div>'
    + '<div class="item-container"></div>'
    + '</div>';
    getNumElems();
    const title = document.querySelector('.num-main-title');
    expect(title.innerHTML).toMatch('Fun Memes(3)');
    expect(title.innerHTML).toBeDefined();
  });

  test('to display zero if none', () => {
    document.body.innerHTML = '<div class="nav-link">'
    + '<span class="num-main-title">Fun Memes</span>'
    + '<div class="grid-container"></div>';
    getNumElems();
    const title = document.querySelector('.num-main-title');
    expect(title.innerHTML).toMatch('Fun Memes(0)');
    expect(title.innerHTML).toBeDefined();
    expect(title.innerHTML).not.toBeNull();
  });
});