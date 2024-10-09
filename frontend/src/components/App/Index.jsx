import { useState } from 'react';
import Title from '../Title';
import Button from '../Button';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("abc");

  const handleInput = (newText) => {
    setText(newText.value);
  }
  
  return (
    <>
      <input value={text} onChange={(e) => handleInput(e.target)} type="text"/>
      <Title name={text} paragrafo={count > 3}/>
      <div className="card">
      <Button count={count} setCount={setCount}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App;
