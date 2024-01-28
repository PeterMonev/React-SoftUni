import { Book } from './Book';
import { useEffect } from 'react';

export const BookList = (props) => {
 

   return(
     <ul>
        {props.books.map((x, i) => <Book key={i} {...x}/>)}
     </ul>
   ) 
}