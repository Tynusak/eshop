import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.css';

export const Heart = () => {
  const [tagged, setTagged] = useState(false);
  return (
    <button className="articleCard__button">
      <FontAwesomeIcon
        icon={faHeart}
        className={!tagged ? 'empty' : ''}
        size="2xl"
      />
    </button>
  );
};
