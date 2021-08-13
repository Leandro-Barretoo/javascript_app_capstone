const popupDom = (item) => {
  const popupSection = document.getElementById('popup');

  const popupContainer = document.createElement('div');
  popupContainer.id = Number(item.id) + 1;
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
  commentContainer.classList.add('comments-section');

  const commentTitle = document.createElement('h4');
  commentTitle.innerHTML = 'Comments<span class="comments-number"></span>';

  const commentTexts = document.createElement('div');
  commentTexts.classList.add('comment-container');
  commentContainer.append(commentTitle, commentTexts);

  //! API SECTİON
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/comments?item_id=';
  const getMemeData = async () => {
    const response = await fetch(`${URL}${Number(item.id)}`);
    const data = await response.json();
    if (response.status === 200) {
      data.forEach((item) => {
        const p = document.createElement('p');
        p.classList.add('comment-text');
        p.innerHTML = `${item.creation_date} ${item.username}: ${item.comment}`;
        commentTexts.append(p);
      });
    } else {
      commentTexts.innerHTML += '<p>No comments</p>';
    }
  };

  getMemeData();

  // ! Form Container
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-section');
  const formTitle = document.createElement('h4');
  formTitle.innerHTML = 'Add a comment';

  const form = document.createElement('div');
  form.classList.add('d-flex', 'form');
  const nameInput = document.createElement('input');
  nameInput.required = true;
  nameInput.classList.add('name-input');
  nameInput.id = Number(item.id) + 2;
  nameInput.placeholder = 'Your name';

  const commentInput = document.createElement('textarea');
  commentInput.classList.add('comment');
  commentInput.id = Number(item.id) + 3;
  commentInput.placeholder = 'Your comment';

  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment-submit');

  commentBtn.innerHTML = 'Comment';
  form.append(nameInput, commentInput, commentBtn);
  formContainer.append(formTitle, form);

  popupContainer.append(
    closeBtn,
    image,
    imageTitle,
    commentContainer,
    formContainer,
  );
  popupSection.appendChild(popupContainer);
};

export default popupDom;
