const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '34788897-0984568366e20e342331605e4',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 20,
});

export const getImages = (request, page) => {
  return fetch(`${BASE_URL}?q=${request}&page=1&${searchParams}`);
};
