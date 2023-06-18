import css from './App.module.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Buton/Button';
import { Modal } from 'components/Modal/Modal';

const BASE_URL = 'https://pixabay.com/api/';
const LS_KEY = '34788897-0984568366e20e342331605e4';

export class App extends Component {
  state = {
    showModal: false,
    loading: false,
    searchValue: '',
    imageItems: [],
  };
  componentDidMount() {}

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getImages = () => {
    this.setState({ loading: true });
    fetch(
      `${BASE_URL}?q=cat&page=1&key=${LS_KEY}&image_type=photo&orientation=horizontal&per_page=20`
    )
      .then(res => res.json())
      .then(images => this.setState({ imageItems: images.hits }))
      .finally(this.setState({ loading: false }));
  };

  handleFormSubmit = searchRequest => {
    this.setState({ searchValue: searchRequest });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm onRequest={this.handleFormSubmit} />
        </Searchbar>
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button>Load more</Button>
        <button type="button" onClick={this.getImages}>
          Modal
        </button>
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
