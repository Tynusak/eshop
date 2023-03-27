import './App.css';
import axios from 'axios';

function App() {
  const loadData = async () => {
    const response = await axios.get(
      'https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed',
    );
    console.log(response.data);
  };

  return (
    <div className="App">
      <button onClick={loadData}>Načti data</button>
    </div>
  );
}

export default App;
