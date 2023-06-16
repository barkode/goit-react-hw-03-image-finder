import css from './App.module.css';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Button } from 'components/Buton/Buton';

export const App = () => {
  return (
    <div className={css.App}>
      <Searchbar />
      <Button />
    </div>
  );
};
