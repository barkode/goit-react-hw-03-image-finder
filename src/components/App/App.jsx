import css from './App.module.css';
import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Buton/Button';
import { Modal } from 'components/Modal/Modal';

export const App = () => {
  return (
    <div className={css.App}>
      <Searchbar>
        <SearchForm />
      </Searchbar>
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button>Load more</Button>
      <Modal />
    </div>
  );
};
