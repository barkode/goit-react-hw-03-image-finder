import css from './Buton.module.css';

export const Button = ({ children }) => {
  return (
    <button type="submit" className={css.Button}>
      {children}
    </button>
  );
};
