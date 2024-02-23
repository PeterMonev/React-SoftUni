import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Starships = () => {
    const [starShip, setStarShip] = useState({});
    const {starshipId} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
       fetch(`https://swapi.dev/api/starships/${starshipId}/`)
       .then(response => response.json())
       .then(result => {
        setStarShip(result)
       })
       .catch(()=> {
        navigate('/NotFound')
       })
    }, [starshipId])

    const nextProductHandler = () => {
        navigate(`/starships/${Number(starshipId) + 1}`);
    }

    return (
    <>
    <h2>Starships Page</h2>

    <h3>Product {starshipId} Specification</h3>
    
    <ul>
        <li>Name: {starShip.name}</li>
        <li>Model: {starShip.model}</li>
        <li>Manufacturer: {starShip.manufacturer}</li>
    </ul>

    <button onClick={nextProductHandler}>Next</button>
    </>
    );
  };
  
  export default Starships;
  