import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    showModal: false,
    isLoading: false,
  };
  render() {
    const { children } = this.props;
    return <ul className={css.ImageGallery}>{children}</ul>;
  }
}
