import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Buton/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm />
        </Searchbar>
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button>Load more</Button>
        <button type="button" onClick={this.toogleModal}>
          Modal
        </button>
        {showModal && <Modal onClose={this.toogleModal} />}
      </div>
    );
  }
}
