import { useState, useEffect } from 'react';

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mouting');    
    }, [])

    useEffect(() => {
        console.log('Updating');
    }, [highlighted])

    const bookClickHeandeler = () =>{ 
        setHighlighted(state => !state);
    }

    const deleteHeandler = () =>{
        setDeleted(true);
    }

    let style = {};

    if(highlighted){
        style.backgroundColor = 'lightgreen'
    }

    if(deleted){
         return 
    }

    return (
        <li style={style}>
        <article > 
            <h2>{props.title}</h2>
            <div>Year: {props.year}</div>
            <div>Price: {props.price}</div>
            <footer>
                <button onClick={bookClickHeandeler} >Highlight</button>
                <button onClick={deleteHeandler}>Delete</button>
                <span>Author: {props.author}</span>
            </footer>
        </article>
    </li>
    )
}