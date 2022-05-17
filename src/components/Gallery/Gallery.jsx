import "./Gallery.css"

/**
 *
 * @param {Array} pictures Tableau contenant les photos du logement
 * @returns Le carrousel des photos du logement
 */

function Gallery(pictures) {
  console.log(pictures)
  return (
    <section>
      {pictures.map((picture) => {
        return <img src={picture} alt="photos du logement" />
      })}
    </section>
  )
}

export default Gallery
