import React, {useState} from 'react'
import Functional from './Functional';
import Class from './Class'

const Common = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);

  function Visible(){
    setState(!state)
  }
  function Visible1(){
    setState1(!state1)
  }
  return (
    <div>
          <h1>Styling Using Functional and Class Component</h1>
     
     <button className="btn1" onClick={Visible}>Div by using Functional Component</button>
     {state && <Functional/>}
     <button className="btn2" onClick={Visible1}>Div by using Class Component</button>
     {state1 && <Class/>}
    </div>
  )
}

export default Common;
