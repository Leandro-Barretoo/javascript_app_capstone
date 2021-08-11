const popup = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');

  commentBtns.forEach((button) => button.addEventListener('click', (e) => {
    const memeContainer = document.getElementById(e.target.id + 1);
    memeContainer.classList.add('visible');
  }));

  const closeBtns = document.querySelectorAll('.close-btn');
  const closePopup = () => {
    const div = document.querySelectorAll('.meme-popup');
    div.forEach((item) => {
      item.classList.add('hidden');
      item.classList.remove('visible');
    });
  };

  closeBtns.forEach((closeBtn) => closeBtn.addEventListener('click', closePopup));
};

export default popup;