import Header from "./header/Header";
import Body from "./body/Body";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";



function App() {
  const [todos, setTodos] = useState([]);

  let fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000')
    setTodos(response.data);
    console.log(todos);
  }


  useEffect(()=>{
    fetchTodos();
  }, [])

  return (
    <div className="App">
      <Header setTodos={setTodos} />
      <Body  todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
