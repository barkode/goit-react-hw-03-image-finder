import css from './Searchbar.module.css';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Searchbar = () => {
  return (
    <header className={css.Searchbar}>
      <SearchForm />
    </header>
  );
};
