import { useEffect, useState } from 'react';
import './App.css';





function App() {


  
  const [isLego, setIsLego] = useState(true);
  const [isStarWars, setIsStarWars] = useState(false)
  

  return (
    <div className="App">
       <h1 className="question">Is your colleague a Lego fan?</h1>
      
    </div>
  );
}

export default App;
