import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useParams} from 'react-router-dom';
import logements from '../logements_sauv.json';
import DetailsLogements from '../components/DetailsLogements';
import Error from "./Error";


const Logement = () => {
    // Récupérer l'id du logement dans l'URL  avec useParams qui est un hook de react-router-dom
    const {id} = useParams();
    // Chercher le id du logement dans le tableau logements
    const logement = logements.find(logement => logement.id === id);
   // console.log(id, logement);

    if (logement === undefined) {
        return <Error/>
    } else {
        // Si le logement n'existe pas, on affiche une page 404
        return (
            <div>
                <Navigation/>
                <DetailsLogements logement={logement}/>
                <Footer/>
            </div>
        );
    }
};


export default Logement;