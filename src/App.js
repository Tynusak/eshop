import './App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Article } from './components/Article/Article';
import { ModalWindow } from './components/ModalWindow/ModalWindow';

function App() {
  const [perPage, setPerpage] = useState(9);
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [openModal, setOpenModal] = useState(false);

  const loadData = async () => {
    try {
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${perPage}&context=embed`,
      );

      setData(response.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openModalWindow = (id) => {
    setOpenModal(true);
  };

  const closeModalWindow = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <h1 className="headline">Techcrunch</h1>
      <p>Search component</p>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="articlesBox">
          {data.map((item) => (
            <Article
              title={item.title.rendered}
              key={item.id}
              onClick={openModalWindow}
            />
          ))}

          <ModalWindow isOpen={openModal}>
            <button onClick={closeModalWindow}>Zavřít</button>
          </ModalWindow>
        </div>
      )}
    </div>
  );
}

export default App;
