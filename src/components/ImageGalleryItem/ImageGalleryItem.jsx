import { Component } from 'react';
import { getImages } from 'utils/fetch_api';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    images: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getImages(this.props.searchText)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(({ hits }) => this.setState({ images: hits }));
    }
  }
  render() {
    const { images } = this.state;
    return (
      images &&
      images.map(({ id, tags, webformatURL }) => {
        return (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              className={css['ImageGalleryItem-image']}
            />
          </li>
        );
      })
    );
  }
}
