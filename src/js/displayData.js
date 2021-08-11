import api from './api.js';
import popupDom from './popupDom.js';

const displayData = async (callback) => {
  const response = await api();
  response.splice(-6).forEach((item) => popupDom(item));
  callback();
};

export default displayData;