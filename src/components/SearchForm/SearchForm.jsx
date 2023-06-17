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
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};
