import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img src="" alt="" className={css['ImageGalleryItem-image']} />
        </li>
        <li className={css.ImageGalleryItem}>
          <img src="" alt="" className={css['ImageGalleryItem-image']} />
        </li>
        <li className={css.ImageGalleryItem}>
          <img src="" alt="" className={css['ImageGalleryItem-image']} />
        </li>
        <li className={css.ImageGalleryItem}>
          <img src="" alt="" className={css['ImageGalleryItem-image']} />
        </li>
      </>
    );
  }
}
