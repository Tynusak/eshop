import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from './components/Article/Article';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { ValuesContext } from './context';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState('');
  const [favourite, setFavourite] = useState(false); //stav pro tlačítko "Oblíbené", prozatím řešeno pouze v komponentě Heart

  const nextArticles = () => {
    const newPage = page + 1;
    setPage(newPage);
  };
  const loadData = async () => {
    try {
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?per_page=9&page=${page}&context=embed`,
      );
      setData(response.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const openModalWindow = (index, newId) => {
    setOpenModal(true);
    const newData = [...data];
    newId = newData[index].id;
    setId(newId);
  };

  const closeModalWindow = () => {
    setOpenModal(false);
  };

  //funkce pro ovládání stvu tlačítka "Oblíbené", zatím nepoužitá

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <ValuesContext.Provider value={{ favourite, handleFavourite }}>
      <div className="App">
        <h1 className="headline">Techcrunch</h1>
        <p>[Search component placeholder]</p>
        <p>[Cart component placeholder]</p>
        <button onClick={nextArticles}>Načíst další</button>
        {!data ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="articlesBox">
              {data.map((item, index) => (
                <Article
                  title={item.title.rendered}
                  key={item.id}
                  showModal={() => openModalWindow(index, item.id)}
                />
              ))}
            </div>
            <ModalWindow isOpen={openModal} id={id}>
              <button onClick={closeModalWindow}>Zavřít</button>
            </ModalWindow>
          </>
        )}
      </div>
    </ValuesContext.Provider>
  );
}

export default App;
