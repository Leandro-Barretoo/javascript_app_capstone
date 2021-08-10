const popup = () => {
  const testButton = document.getElementById('test-btn'); // change it with exact button
  const closeBtn = document.getElementsByClassName('close-btn')[0];
  const popupContainer = document.getElementById('test');

  const openPopUp = () => {
    popupContainer.classList.add('show-popup');
    popupContainer.classList.remove('close-pop');
  };

  const closePopUp = () => {
    popupContainer.classList.remove('show-popup');
    popupContainer.classList.add('close-popup');
  };

  testButton.addEventListener('click', openPopUp);
  closeBtn.addEventListener('click', closePopUp);
};

export default popup;