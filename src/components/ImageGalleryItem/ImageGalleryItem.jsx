import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  showImage = () => {
    const { handleOpenModal, image } = this.props;
    handleOpenModal(image.id);
  };

  render() {
    const { tags, webformatURL } = this.props;
    return (
      <li className={css.ImageGalleryItem} onClick={this.showImage}>
        <img
          onClick={this.eventShow}
          src={webformatURL}
          alt={tags}
          className={css['ImageGalleryItem-image']}
        />
      </li>
    );
  }
}
