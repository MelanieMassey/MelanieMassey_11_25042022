import "../style/Home.css"
import banner from "../assets/banner.png"
import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"
import { getAllAccomodation } from "../services/datamanager"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="Home">
      <Banner
        text="Chez vous, partout et ailleurs"
        img={banner}
        imgDescription="Paysage d'une côte rocheuse"
      />
      <section className="gallery">
        {getAllAccomodation().map((logement) => (
          <Link to={`/accomodation/${logement.id}`} key={logement.id}>
            <Card
              cover={logement.cover}
              title={logement.title}
              id={logement.id}
            />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home
