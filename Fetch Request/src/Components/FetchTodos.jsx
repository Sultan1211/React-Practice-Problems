import React, { useState } from 'react';
import axios from 'axios';

function FetchTodos() {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(1); 

    const getTodos = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = result.data.title;
        setTodos([...todos, data]); 
        setCount(count + 1); 
    };

    return (
        <div>
            <button onClick={getTodos}>Get Todos</button>
            <div>
                {todos.map((todo, index) => (
                    <div key={index}>{todo}</div>
                ))}
            </div>
        </div>
    );
}

export default FetchTodos;
