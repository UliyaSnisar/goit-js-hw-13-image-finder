export default {
  _url: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
  _myKey: '20017533-65de147d74af2931235cb6855',

  async getImages(value, flagNewPage) {
    const res = await fetch(
      this._url +
        '&q=' +
        value +
        '&page=' +
        flagNewPage +
        '&per_page=12&key=' +
        this._myKey,
    );
    return await res.json();
  },
};
