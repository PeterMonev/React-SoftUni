import { useEffect, useState } from 'react';

export const CharacterList = () => {
    const [characters, setCharaters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(result => {
            setCharaters(result.results);
        })
    }, []);

   

    return (
        <ul>
            {!characters.length && <li>Loading...</li>}
           {characters.map(x => (
            <li key={x.name}>{x.name}</li>
           ))}
        </ul>
    );
}