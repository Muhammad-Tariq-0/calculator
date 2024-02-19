import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const resultRef = useRef(null);
  const inputRef = useRef(null); 

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {  
    e.preventDefault()
    setResult((result) => {
      return result - Number(inputRef.current.value)
    })
  };
 
  function times(e) { 
     e.preventDefault()
    setResult((result) => {
      return result * Number(inputRef.current.value)
    })
  }; 

  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  }; 

  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
  }; 

  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
  }; 

  return (
    <div className="App">
      <div> 
        <h1>Simple Calculator</h1> 
      </div> 
      <form> 
        <h4 ref={resultRef}> 
          {result}
        </h4> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
         <div>
         <button onClick={plus}>add</button> 
         <button onClick={minus}>subtract</button>
         <button onClick={times}>multiply</button>
         <button onClick={divide}>divide</button>
         <button onClick={resetInput}>reset input</button>
         <button onClick={resetResult}>reset result</button>
         </div>
      </form> 
    </div> 

  );
}

export default App;
