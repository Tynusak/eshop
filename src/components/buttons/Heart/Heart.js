import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.css';

export const Heart = () => {
  const [tagged, setTagged] = useState(false);
  const handleTag = () => {
    setTagged(!tagged);
  };

  return (
    <button className="articleCard__button" onClick={handleTag}>
      <FontAwesomeIcon
        icon={faHeart}
        className={tagged ? 'tagged icon' : 'icon'}
        size="2xl"
      />
      <text className="wide">
        {tagged ? 'Odebrat z oblíbených' : 'Přidat do oblíbených'}
      </text>
    </button>
  );
};
