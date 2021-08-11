const postLike = (itemID) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GuhYPExBlAlZ5RuYo3CN/likes', {
    method: 'POST',
    body: JSON.stringify({ item_id: itemID }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => response);
};

const checkElems = () => {
  const arr = document.querySelectorAll('.fa-heart');
  arr.forEach((item) => {
    item.addEventListener('click', (e) => {
      const idOfItem = e.target.className.split(' ')[0];
      const nextSib = e.target.nextSibling;
      postLike(idOfItem);
      nextSib.innerHTML = parseInt(nextSib.innerHTML, 2) + 1;
    });
  });
};

export default checkElems;