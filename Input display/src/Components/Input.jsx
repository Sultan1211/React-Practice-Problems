import React, { useState } from 'react'

function Input() {
    const [input, setInput] = useState("");

    return (
        <div>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} ></input>
            <p>User Input: {input}</p>
        </div>
    )
}

export default Input