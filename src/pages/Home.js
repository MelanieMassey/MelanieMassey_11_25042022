import '../style/Home.css';
import banner from '../assets/banner.png'
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Thumb from '../components/Thumb/Thumb';
import logements from '../data/logements.json';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner text="Chez vous, partout et ailleurs" img={banner} imgDescription="Paysage d'une côte rocheuse"/>
      <section class="gallery">
        {logements.map((logement) => (
          <Thumb src={logement.cover} alt={logement.title} title={logement.title} id={logement.id}/>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
