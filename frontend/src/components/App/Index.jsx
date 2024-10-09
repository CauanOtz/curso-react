import { useState } from 'react';
import Title from '../Title';
import Button from '../Button';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("abc");

  const handleInput = (newText) => {
    setText(newText.value);
    if(newText.value.length > 9){
      setText("Erro");
    }
  }
  
  return (
    <>
      <input value={text} onChange={(e) => handleInput(e.target)} type="text"/>
      <Title name={text} paragrafo={count > 3}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App;
