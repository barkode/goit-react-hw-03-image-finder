import css from './App.module.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };
  componentDidMount() {}

  handleFormSubmit = searchRequest => {
    this.setState({ searchText: searchRequest });
  };

  render() {
    const { searchText, showModal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm onRequest={this.handleFormSubmit} />
        </Searchbar>
        <ImageGallery searchText={this.state.searchText} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
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
