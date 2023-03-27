import './Article.css';
import { Heart } from '../buttons/Heart/Heart';
import { AddToCart } from '../buttons/AddToCart/AddToCart';

export const Article = ({ title, showModal }) => {
  return (
    <div className="articleCard">
      <h3 onClick={showModal} className="articleCard__title">
        {title}
      </h3>
      <div className="articleCard__buttons">
        <Heart />
        <AddToCart />
      </div>
    </div>
  );
};
