import { useState } from "react"

export default function Item( {task, numID} ) {
    const [checked, setChecked] = useState(false);

    function toggleChecked() {
        setChecked(prev => !prev);
    }

    return (
        <>
            <h1>
                {numID}

                To do: {task} 

                <input 
                    type="checkbox"
                    onChange={toggleChecked}
                />

            </h1>
        </>
        
    )

}