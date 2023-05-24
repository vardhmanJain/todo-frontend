import Todo from "./Todo";
import "./Body.css";


function Body({todos, setTodos}) {
    return ( 
        <div className="display-container">
            {
                todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} setTodos={setTodos} />
                })
            }
        </div>
     );
}

export default Body;