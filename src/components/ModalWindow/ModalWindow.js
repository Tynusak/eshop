import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Heart } from '../buttons/Heart/Heart';
import { AddToCart } from '../buttons/AddToCart/AddToCart';

export const ModalWindow = ({ children, isOpen, id }) => {
  const [article, setArticle] = useState();
  const [errorMessage, setErrorMessage] = useState();

  console.log(id, 'a');

  const loadArticle = async (id) => {
    try {
      console.log(id, 'x');
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts/${id}`,
      );

      setArticle(response.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    loadArticle(id);
  }, [id]);

  return (
    <Modal isOpen={isOpen}>
      {!article ? (
        <p>Loading..</p>
      ) : (
        <>
          {' '}
          <h3>{article?.title?.rendered}</h3>
          <h4>Written by: {article.author}</h4>
          <p>Date:{article.date}</p>
          <a href={article.link}>Go to article</a>
          <p>Price: {article.id} CZK</p>
          <div>
            <Heart />
            <AddToCart />
          </div>
        </>
      )}

      {children}
    </Modal>
  );
};
