const commentSubmit = () => {
  const test = document.querySelectorAll('.comment-submit');
  test.forEach((btn) => btn.addEventListener('click', () => {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: btn.parentNode.parentNode.id - 1,
        username: document.getElementById(Number(btn.parentNode.parentNode.id) + 1).value,
        comment: document.getElementById(Number(btn.parentNode.parentNode.id) + 2).value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }));
};

export default commentSubmit;