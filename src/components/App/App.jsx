import css from './App.module.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Buton/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    searchText: '',
  };
  componentDidMount() {}

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = searchRequest => {
    this.setState({ searchText: searchRequest });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm onRequest={this.handleFormSubmit} />
        </Searchbar>
        <ImageGallery>
          <ImageGalleryItem searchText={this.state.searchText} />
        </ImageGallery>
        <Button>Load more</Button>
        {showModal && <Modal onClose={this.toogleModal} />}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}
