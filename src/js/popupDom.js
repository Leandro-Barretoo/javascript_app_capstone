const popupDom = (item) => {
  const popupSection = document.getElementById('popup');

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('meme-popup');

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.classList.add('close-btn');

  const image = document.createElement('img');
  image.src = item.url;
  const imageTitle = document.createElement('p');
  imageTitle.classList.add('image-title');
  imageTitle.innerHTML = item.name;

  // ! Comment Container
  // const commentContainer = document.createElement('div');
  // const commentTitle = document.createElement('h4');
  // commentTitle.innerHTML = 'Comments'; // Add comment numbers, create function for that.

  // const comment = document.createElement('p');
  // comment.innerHTML = 'Comment1'; // Comment-date  commenter-name: comment  // It will come from input

  // commentContainer.append(commentTitle, comment);

  // // ! Form Container
  // const formContainer = document.createElement('div');
  // const formTitle = document.createElement('h4');
  // formTitle.innerHTML = 'Add a comment';

  // const form = document.createElement('form');
  // const nameInput = document.createElement('input');
  // nameInput.placeholder = 'Your name';

  // const commentInput = document.createElement('textarea');
  // commentInput.placeholder = 'Your comment';

  // const commentBtn = document.createElement('button');
  // commentBtn.innerHTML = 'Comment';

  // formContainer.append(formTitle, form, nameInput, commentInput, commentBtn);

  // popupContainer.append(closeBtn, image, imageTitle, commentContainer, formContainer);
  popupContainer.append(image, closeBtn, imageTitle);
  popupSection.appendChild(popupContainer);
};

export default popupDom;
