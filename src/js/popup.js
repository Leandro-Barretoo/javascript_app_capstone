import commentCounter from './commentCounter.js';

const popup = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => button.addEventListener('click', (e) => {
    const memeContainer = document.getElementById(Number(e.target.id) + 1);
    memeContainer.classList.add('visible');
    commentCounter(e.target.id);
  }));

  const closeBtns = document.querySelectorAll('.close-btn');
  const closePopup = () => {
    const div = document.querySelectorAll('.meme-popup');
    div.forEach((item) => {
      item.classList.add('hidden');
      item.classList.remove('visible');
    });
  };

  closeBtns.forEach((closeBtn) => closeBtn.addEventListener('click', (e) => {
    const title = e.target.parentNode.childNodes[3].childNodes[0];
    title.innerHTML = 'Comments';
    closePopup();
  }));
};

export default popup;