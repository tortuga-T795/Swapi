import React from 'react';
import SwapiService from "../../services/swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";

const  swapiService = new SwapiService();
const { getPerson, getPersonImage, getPlanet, getPlanetImage, getStarship, getStarshipImage } = swapiService;

const PersonDetails = ({itemId})=>{
    return (
        <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="birthYear" label="Birthday"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};

const PlanetDetails = ({itemId})=>{
    return (
        <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    );
};

const StarshipDetails = ({itemId})=>{
    return (
        <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredit" label="Cost"/>
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};