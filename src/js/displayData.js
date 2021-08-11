import getMemeData from './memeApi.js';
import popupDom from './popupDom.js';

const displayData = async (callback) => {
  const response = await getMemeData();
  response.splice(-6).forEach((item) => popupDom(item));
  callback();
};

export default displayData;