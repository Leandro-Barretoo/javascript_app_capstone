import commentCounter from '../js/commentCounter.js';

describe('number of items', () => {
  test('displays on the page', () => {
    document.body.innerHTML = "<div id='176909'><button></button><img></img>"
    + "<p></p><div><h4><span class='comments-number'>(22)</span></h4><div></div>";
    commentCounter(176908);
    const commentNumber = document.querySelector('.comments-number');
    expect(commentNumber.innerHTML).toMatch('(22)');
  });
});
