import './Article.css';
import { Heart } from '../buttons/Heart/Heart';
import { AddToCart } from '../buttons/AddToCart/AddToCart';

export const Article = ({ title, onClick }) => {
  return (
    <div className="articleCard" onClick={onClick}>
      <h3>{title}</h3>
      <div className="articleCard__buttons">
        <Heart />
        <AddToCart />
      </div>
    </div>
  );
};
