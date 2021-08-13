const commentCounter = (itemId) => {
  const popup = document.getElementById(Number(itemId) + 1);
  const commentList = popup.childNodes[3].childNodes[1].childNodes;
  popup.childNodes[3].childNodes[0].innerHTML += `(${commentList.length})`;
};
export default commentCounter;
