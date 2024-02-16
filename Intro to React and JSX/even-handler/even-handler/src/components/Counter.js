import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
         case 1:
            return "First Blood";
         case 2:
            return "Double Kill";   


         default:
            return 'Counter'
    }
}

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
 
  const incrementCounterHandler = (e) => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  const decrementCounterHandler = (e) => {
    setCounter((oldCounter) => oldCounter - 1);
  };

  const clearCounterHandler = (e) => {
    setCounter(0);
  };
  

  return (
    <div>
       
      <p style={{fontSize: Math.max(counter, 1) + 'em'}}>{counter > 3 ? 'Goodlike' : getTitle(counter) }: {counter}</p>
      <button onClick={decrementCounterHandler}>-</button>
      {props.canReset && <button onClick={clearCounterHandler}>0</button> }
      {counter < 10 
        ? <button onClick={incrementCounterHandler}>+</button>
        : null
      }
   
    </div>
  );
};

export default Counter;
