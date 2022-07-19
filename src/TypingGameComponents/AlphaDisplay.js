import { useEffect, useState } from "react";
import "./TypeMain.css";

const AlphaDisplay = () => { /* takes in no props and returns the element displaying the letter*/ 
  const [letter, setLetter] = useState("");
  
  const a = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = a.toUpperCase();
  var randomLetter = alphabet[(Math.floor(Math.random() * a.length))];

  
useEffect(()=>{
    setLetter(randomLetter);
},[alphabet])
  return (
    <>
    <div className='AlphaWrapper'>
      <div className="AlphaDisplay">
        
        
        <p className="AlphaDisplayLetter">{letter}</p>
      </div>
      </div>
    </>
  );
};

export default AlphaDisplay;
