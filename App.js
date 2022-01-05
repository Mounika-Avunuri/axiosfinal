import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
const App = ()=>{
  const[data,setData]= useState([]);
  const[name,setName] = useState();

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>setData(response.data))},[])
    const inputData=(e)=>{
      setName(e.target.value);
    }
    const submitHandler=()=>{
      const postdata={
        name
      }
      axios.post("https://jsonplaceholder.typicode.com/posts",postdata).then(Data=>{console.log(Data);})

    }
  return (
    <div className='Users'>
      <h1 className='Header'>Digikull Students</h1>
     <h2 className='Header1'>Hello user</h2>
     <input type="textfield" name="name" value={name} onChange={inputData}></input>
      <button className="btn" onClick={submitHandler}>Add</button>
      {data.map(item=>(
        <table border='1' className="table">
          <tr className='tableData'>
      {item.name}
      </tr>
      </table>
      ))}
    </div>
  );
}

export default App;
