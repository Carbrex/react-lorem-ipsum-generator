import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit=(e)=>{
    let amount = parseInt(count);
    console.log('hello world');
    e.preventDefault();
    setText([data[0]]);
    console.log(text);
    for (let index = 1; index < data.length && index<amount; index++) {
      const element = data[index];
      setText((text)=>[...text,element]);
    }
  }
  return (
    <section className="section-center">
      <h3>tired  of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs : </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button type="submit" className='btn'>generate</button>
      </form>
      <article className="lorem-text">
        {text.length}
        {
          text.map((para,index)=>{
            return <p key={index}>{para} {index}</p>;
          })
        }
      </article>
    </section>
  )
}

export default App;
