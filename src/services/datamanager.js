import logements from '../data/logements.json';
import Page404 from '../pages/Page404';

/**
 * @typedef {Object} Accomodation
 * @property {String} cover l'image de la carte
 * @property {String} title le titre du logement
 * @property {String} id Id du logement
 * @property {String} description Description du logement
 * @property {Array} equipments Tableau contenant les équipements du logement
 * @property {Object} host Tableau contenant le nom et la photo de l'hôte
 * @property {Array} pictures Tableau contenant les images du logement
 * @property {string} rating Evaluation du logement
 * @property {Array} tags Tableau contenant les tags du logement
 * @property {String} location adresse du logement
 * 
 * @typedef {Object} mainPageAccomodation
 * @property {String} cover l'image de la carte
 * @property {String} title le titre du logement
 * @property {String} id Id du logement
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
            title : logement.title,
            id : logement.id
        }
    })
}

/**
 * retourne la liste des appartement à afficher sur la page d'accueil
 * @param   {String} id
 * @return  {Accomodation}  
 */
function getAccomodationById(id){

    // logements.map((logement) => {
    //     if(id === logement.id) {
    //         return logements.filter((logement)=>logement.id===id)[0];
    //     } else {
    //         return <Page404/>
    //     }
    // })
    return logements.filter((logement)=>logement.id===id)[0];
}

export {
    getAccomodationById,
    getAllAccomodation
} 