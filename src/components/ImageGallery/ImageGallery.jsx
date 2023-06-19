import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'utils/fetch_api';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: null,
    showModal: false,
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      getImages(this.props.searchText)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(({ hits }) => this.setState({ images: hits, isLoading: false }));
    }
  }
  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        {isLoading && <h1>LOADING ......</h1>}
        <ul className={css.ImageGallery}>
          {images &&
            images.map(({ id, tags, webformatURL }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                webformatURL={webformatURL}
              />
            ))}
        </ul>
        ;
      </>
    );
  }
}
