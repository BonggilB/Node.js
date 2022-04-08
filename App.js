// ============================= 여기가 원본 시작 ==================//
import './App.css';
import {useState} from 'react';
function App(){
  let [idx,idxChange]=useState(0);
  let [title,titleChange]=useState(0);
  let [content,contentChagne]=useState(0);
  return(
    <div className='App'>
      <section>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </section>
    </div>
  );
}
export default App;

