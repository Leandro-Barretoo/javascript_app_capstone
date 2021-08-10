import api from './api.js';
import popupDom from './popupDom.js';

const displayData = async () => {
  const response = await api();
  response.splice(-1).forEach((item) => popupDom(item));
};

export default displayData;