import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchForm.module.css';

export class SearchForm extends Component {
  state = {
    value: '',
  };

  handleRequestChange = e => {
    this.setState({ value: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
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
    this.props.onRequest(this.state.value);
    this.setState({ value: '' });
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
          value={this.state.value}
        />
      </form>
    );
  }
}
