/** @format */

const popupDom = () => {
  const popupSection = document.getElementById('popup');

  const popupContainer = document.createElement('div');

  const image = document.createElement('p'); // change it to img
  image.innerHTML = 'IMAGE'; // It will come from API
  const imageTitle = document.createElement('p');
  imageTitle.innerHTML = 'Image title'; // It will come from API

  // ! Comment Container
  const commentContainer = document.createElement('div');
  const commentTitle = document.createElement('h4');
  commentTitle.innerHTML = 'Comments'; // Add comment numbers, create function for that.

  const comment = document.createElement('p');
  comment.innerHTML = 'Comment1'; // Comment-date  commenter-name: comment  // It will come from input

  commentContainer.append(commentTitle, comment);

  // ! Form Container
  const formContainer = document.createElement('div');
  const formTitle = document.createElement('h4');
  formTitle.innerHTML = 'Add a comment';

  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Your name';

  const commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Your comment';

  const commentBtn = document.createElement('button');
  commentBtn.innerHTML = 'Comment';

  formContainer.append(formTitle, form, nameInput, commentInput, commentBtn);

  popupContainer.append(image, imageTitle, commentContainer, formContainer);
  popupSection.appendChild(popupContainer);
};

export default popupDom;
