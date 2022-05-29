import './App.css';
import products from './product';
import ItemPage from './components/ItemPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <ItemPage products={products} />
    </div>
  );
}

export default App;
