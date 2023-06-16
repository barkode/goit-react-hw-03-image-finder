import css from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={css.SearchForm}>
      <button type="submit" className={css['SearchForm-button']}>
        <span className={css['SearchForm-button-label']}>Search</span>
      </button>

      <input
        className={css['SearchForm-input']}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  );
};
