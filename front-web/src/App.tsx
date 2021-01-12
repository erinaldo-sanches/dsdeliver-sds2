import { useEffect } from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  useEffect(() => {
    console.log('Componente iniciou!');
  },[]);

  return (
    <div>
      <Counter />
    </div>
    
  );
}

export default App;
