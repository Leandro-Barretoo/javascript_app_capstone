const getNumElems = () => {
  const numElems = document.querySelectorAll('.item-container');
  const addToTitle = document.querySelector('.num-main-title');
  addToTitle.innerHTML += `(${numElems.length})`;
};

export default getNumElems;