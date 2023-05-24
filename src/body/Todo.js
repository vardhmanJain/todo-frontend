import axios from "axios";

function Todo({todo, setTodos}) {

    const handleClick = async (e, id) =>{
        e.preventDefault();
        await axios.delete("http://localhost:5000/"+id);
        const response = await axios.get("http://localhost:5000");
        setTodos(response.data)
    }


    return ( 
        <div className="todo-container">
            <div className="todo">
                {todo.name}
            </div>
            <button onClick={e => handleClick(e, todo.id)}>delete</button>
        </div>
     );
}

export default Todo;