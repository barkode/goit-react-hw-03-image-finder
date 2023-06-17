import css from './Searchbar.module.css';

export const Searchbar = ({ children }) => {
  return <header className={css.Searchbar}>{children}</header>;
};
