import { useState } from 'react';
import Task from './component/Task'
import Form from './component/Form';


export default function App() {
  const [values, setValues] = useState([])

  const handleSubmit = (value) => {
    setValues([...values, value]);
  };
  
  return (
    <div className="App">

      <h1>To-do App</h1>

      <Form clickSubmit={handleSubmit}/>

      <div>
        {values.map((value, index) => (
          <Task key={index} task={value} />
        ))}
      </div>


    </div>
  );
}
