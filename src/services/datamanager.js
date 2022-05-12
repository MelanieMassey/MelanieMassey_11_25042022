import logements from '../data/logements.json';

/**
 * @typedef {Object} mainPageAccomodation
 * @property {String} cover l'image de la carte
 * @property {String} title le titre de l'appartement
 * @property {String} id
 */

/**
 * retourne la liste des appartement à afficher sur la page d'accueil
 *
 * @return  {Array.<mainPageAccomodation>}  [return description]
 */
function getAllAccomodation(){
    return logements.map((logement)=>{
        return {
            cover : logement.cover,
            title:logement.title,
            id:logement.id
        }
    })
}

export {
    getAllAccomodation
}