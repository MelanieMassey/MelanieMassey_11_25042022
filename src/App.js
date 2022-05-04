import './style/App.css';
import banner from './assets/banner.png'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner text="Chez vous, partout et ailleurs" img={banner} imgDescription="Paysage d'une côte rocheuse"/>
    </div>
  );
}

export default App;
