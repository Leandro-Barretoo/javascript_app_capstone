const popupDom = (item) => {
  const popupSection = document.getElementById('popup');

  const popupContainer = document.createElement('div');
  popupContainer.id = item.id + 1;
  popupContainer.classList.add('meme-popup', 'hidden');

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn', 'fas', 'fa-times');

  const image = document.createElement('img');
  image.src = item.url;
  const imageTitle = document.createElement('p');
  imageTitle.classList.add('image-title');
  imageTitle.innerHTML = item.name;

  // ! Comment Container
  const commentContainer = document.createElement('div');
  const commentTitle = document.createElement('h4');
  commentTitle.innerHTML = 'Comments'; // Add comment numbers, create function for that.

  const commentTexts = document.createElement('div');

  commentContainer.append(commentTitle, commentTexts);

  // 61581, 176908,   //error 157978092, 89655, 7183956, 71428573
  //! API SECTİON
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/comments?item_id=';
  const getMemeData = async () => {
    const response = await fetch(`${URL}${Number(item.id)}`);
    const data = await response.json();
    if (response.status === 200) {
      data.forEach((item) => { commentTexts.innerHTML += `<p>${item.creation_date} ${item.username}: ${item.comment}</p>`; });
    }
  };

  getMemeData();

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

  popupContainer.append(closeBtn, image, imageTitle, commentContainer);
  popupSection.appendChild(popupContainer);
};

export default popupDom;
