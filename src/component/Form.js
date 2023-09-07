import { useState } from "react";
import Task from "./Task.js";

export default function Form({clickSubmit}) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        clickSubmit(name);
        setName("");
    }    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>What's on the list today?
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button>Submit Task</button>
            </form>

        </>
    )
}