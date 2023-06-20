import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchForm.module.css';

export class SearchForm extends Component {
  state = {
    searchText: '',
  };

  handleRequestChange = e => {
    this.setState({ searchText: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText.trim() === '') {
      toast.error('🦄 You need to enter request!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    this.props.onRequest(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <form className={css.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={css['SearchForm-button']}>
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleRequestChange}
          value={this.state.searchText}
        />
      </form>
    );
  }
}
