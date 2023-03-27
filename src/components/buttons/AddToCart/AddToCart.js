import './AddToCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export const AddToCart = () => {
  return (
    <button className="articleCard__button--plus">
      <FontAwesomeIcon icon={faPlus} size="2xl" />
    </button>
  );
};
