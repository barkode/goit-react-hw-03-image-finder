import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Buton/Button';
import { Modal } from 'components/Modal/Modal';
import { getImages } from 'utils/fetch_api';
import { toast } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: null,
    totalHits: null,
    showModal: false,
    isLoading: false,
    modalImage: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchText !== this.props.searchText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      getImages(this.props.searchText, this.state.page)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(({ hits, totalHits }) => {
          this.setState(prev =>
            prev.images
              ? { images: [...prev.images, ...hits], totalHits }
              : { images: [...hits], totalHits }
          );
        })
        .catch(error =>
          toast.error(`🦄 Sory we have an ${error}. Try again.`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        )
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  toogleModal = image => {
    this.setState(({ showModal, modalImage }) => ({
      showModal: !showModal,
      modalImage: image,
    }));
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  imageInModal = (array, findImage) => {
    return array.find(image => image.id === findImage);
  };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;
    const searchText = this.props.searchText;
    return (
      <>
        {showModal && (
          <Modal
            onClose={this.toogleModal}
            image={this.imageInModal(images, modalImage)}
          />
        )}

        <ul className={css.ImageGallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem
                image={image}
                key={image.id}
                tags={image.tags}
                webformatURL={image.webformatURL}
                handleOpenModal={this.toogleModal}
              />
            ))}
        </ul>

        {!isLoading ? (
          <Button onClick={this.handleLoadMore}>
            {isLoading ? (
              <PropagateLoader color="#36d7b7" size={25} />
            ) : (
              `Load more...${searchText}'s`
            )}
          </Button>
        ) : (
          ''
        )}
      </>
    );
  }
}
