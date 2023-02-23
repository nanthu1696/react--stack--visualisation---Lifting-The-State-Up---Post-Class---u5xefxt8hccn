import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Element from './components/element';
import {useState} from 'react';
function App() {
  let [arr, setArr] = useState([]);
  let [val, setVal]  = useState("");
  let [popu, setPopu] = useState("");
  let [topu, setTopu] = useState("");
  function handleArr()
  {
    let arr2 = [val,...arr]
    setArr(arr2);
  }
  function handle()
  {
    setPopu(arr.shift());

  }
  function handletop()
  {
    let l = arr.shift();
    setTopu(l);
    let arr2 = [l, ...arr];
    setArr(arr2);
  }
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {arr.map((each,index)=>(
            <Element  valu = {each}/>
          ))}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick = {handleArr}>
              PUSH
            </button>
            <input type="text" className="form-control" onChange = {(event)=> setVal(event.target.value)}/>
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handle}>
              POP
            </button>
            <input type="text" disabled className="form-control" value = {popu} />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"onClick = {handletop}>
              TOP
            </button>
            <input type="text" disabled className="form-control" value = {topu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
