import './App.css';
import { useEffect, useRef, useState } from 'react'
 
function App() {
  const infoRef = useRef();

  const [values, setValues] = useState({
   username: '',
   password: '',
   age: '',
   bio: '',
   gender: 'f',
   userType: 'corporate',
   tac: true,
   egn: '',
   eik: '',
   
  }); 

  useEffect(() => {
      if(values.username && values.age){
         infoRef.current.value = `${values.username} - ${values.age}`;
      }
  }, [values.username], [values.age]);

  const changeHanlder = (event) => {
   setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
   }))
  }

 
 const submitHandler = (event) => {
   event.preventDefault(); 
 
  }

  return (
    <div className="App">
      <header className="App-header">
         <form onSubmit={submitHandler}>
          <div>
             <label htmlFor="username">Username: </label>
             <input id="username" type="text" name="username" onChange={changeHanlder} value={values.username} />
          </div> 

          <div>
             <label htmlFor="password">Password: </label>
             <input id="password" type="password" name="password" value={values.password} onChange={changeHanlder} />
          </div>   

          <div>
             <label htmlFor="age">Age: </label>
             <input id="age" type="number" name="age" value={values.age} onChange={changeHanlder} />
          </div>

          <div>
              <label htmlFor="bio">Bio: </label>
              <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHanlder}/>
          </div>

          <div>
               <label htmlFor="gender">Gender: </label>
               <select name="gender" id="gender" value={values.gender} onChange={changeHanlder}>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
               </select>
          </div>

          <div>
              <label htmlFor="individual-user-type">Individiual: </label>
              <input type="radio" name="userType" value="individual" id="individual-user-type" onChange={changeHanlder} checked={values.userType === "individual"} />
              <label htmlFor="corporate-user-type">Corporate: </label>
              <input type="radio" name="userType" value="corporate" id="corporate-user-type" onChange={changeHanlder} checked={values.userType === "corporate"}/>
          </div>

          <div>
            <label htmlFor="Identifier">{values.userType === 'individual' ? 'EGN' : 'EIK'}</label>

            {values.userType === "individual" ? <input type="text" id="Identifier" name="egn" value={values.egn} onChange={changeHanlder}/> : <input type="text" name="eik" id="Identifier" value={values.eik} onChange={changeHanlder}/> }
          </div>

          <div>
              <label htmlFor="tac">Terms and Conditions: </label>
              <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={changeHanlder} />
          </div>

          <div>
             <input type="submit" value="Register" disabled={!values.tac}/>
          </div> 

          <div>
            <label htmlFor="uncontrolled-input">Uncontrolled Input</label>
            <input type="text" name="uncontrolled" id="uncontrolled-input" ref={infoRef}/>
          </div>
         </form>  
      </header>
    </div>
  );
}

export default App;
