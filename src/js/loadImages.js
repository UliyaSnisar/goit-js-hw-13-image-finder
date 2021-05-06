import apiService from './apiService';
import makeImageCard from './../templates/imageCard.hbs';
import { success } from './pnotify';

const loadImages = (item, flag, ref) => {
  return apiService.getImages(item, flag).then(data => {
    ref.insertAdjacentHTML('beforeend', makeImageCard(data.hits));
    success({
      title: 'Success!',
      text: 'New images Loaded',
    });
  });
};

export { loadImages };
