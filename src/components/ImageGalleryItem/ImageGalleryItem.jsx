import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { tags, webformatURL } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css['ImageGalleryItem-image']}
        />
      </li>
    );
  }
}
