const commentSubmit = () => {
  const test = document.querySelectorAll('.comment-submit');
  test.forEach((btn) => btn.addEventListener('click', () => {
    const username = document.getElementById(Number(btn.parentNode.parentNode.id) + 1).value;
    const comment = document.getElementById(Number(btn.parentNode.parentNode.id) + 2).value;
    const commentContainer = document.getElementById(btn.parentNode.parentNode.id);
    const p = document.createElement('p');
    p.classList.add('comment-text');
    p.innerHTML = `${username}: ${comment}`;
    commentContainer.childNodes[3].childNodes[1].appendChild(p);
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: Number(btn.parentNode.parentNode.id) - 1,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }));
};

export default commentSubmit;