import { useState } from "react"

export default function Task( {task} ) {
    const [checked, setChecked] = useState(false);

    function toggleChecked() {
        setChecked(prev => !prev);
    }

    return (
        <>
            <h1>

                To do: {task} 

                <input 
                    type="checkbox"
                    onChange={toggleChecked}
                />

            </h1>
        </>
        
    )

}