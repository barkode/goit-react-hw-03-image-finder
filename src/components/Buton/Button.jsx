import css from './Buton.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      {children}
    </button>
  );
};
