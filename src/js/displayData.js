import getMemeData from './memeApi.js';
import popupDom from './popupDom.js';

const displayData = async (callback, callback2) => {
  const response = await getMemeData();
  response.splice(-6).forEach((item) => popupDom(item));
  callback();
  callback2();
};

export default displayData;