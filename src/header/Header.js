import { useState } from "react";
import axios from "axios";
import "./Header.css"


function Header({setTodos}) {
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000", {name: text});
        const response = await axios.get("http://localhost:5000");
        setTodos(response.data)
        setText("");
    }

    return (     

        <div className="input-container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
                <button className="button-submit">submit</button>
            </form>
        </div>
     );
}

export default Header;