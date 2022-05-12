import '../style/Home.css';
import banner from '../assets/banner.png'
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import { getAllAccomodation } from '../services/datamanager';

function Home() {
  return (
    <div className="Home">
      <Banner text="Chez vous, partout et ailleurs" img={banner} imgDescription="Paysage d'une côte rocheuse"/>
      <section className="gallery">
        {getAllAccomodation().map((logement) => (
          <Card src={logement.cover} alt={logement.title} title={logement.title} id={logement.id} key={logement.id}/>
        ))}
      </section>
    </div>
  );
}

export default Home;
