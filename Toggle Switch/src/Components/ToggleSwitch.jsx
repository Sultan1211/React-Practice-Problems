import React from 'react'
import { useState } from 'react'

function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(false);
    const handleClick = () => {
        setIsToggled(!isToggled);
    }
    return (
        <div>
            <label>
                <input type="checkbox" onClick={handleClick} />
            </label>
            <p>
                {isToggled ? "ON" : "OFF"}
            </p></div>
    )
}

export default ToggleSwitch