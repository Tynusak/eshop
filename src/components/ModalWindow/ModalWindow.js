import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Heart } from '../buttons/Heart/Heart';
import { AddToCart } from '../buttons/AddToCart/AddToCart';

export const ModalWindow = ({ children, isOpen }) => {
  const [article, setArticle] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const { id } = useParams();

  const loadArticle = async () => {
    try {
      const response = await axios.get(
        ` https://techcrunch.com/wp-json/wp/v2/posts/${id}`,
      );

      setArticle(article);
      console.log(article);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    loadArticle();
  }, []);

  return (
    <Modal isOpen={isOpen}>
      <h3>Title</h3>
      <h4>Author</h4>
      <p>Date</p>
      <p>Link</p>
      <p>Price</p>
      <div>
        <Heart />
        <AddToCart />
      </div>
      {children}
    </Modal>
  );
};
