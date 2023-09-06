import Item from './component/Item'
import Form from './component/Form';

export default function App() {
  return (
    <div className="App">
      <Form />

      <h1>To-do App</h1>

      <Item task='Wash dishes' />
      <Item task='Water plants' />
      <Item task='Take out trash' />

    </div>
  );
}

// const listItems = [];

// const list = (
//   <ul>
//     {listItems.map((item, index) => (
//       <li key={index+1}>{index+1}</li>
//     ))}
//   </ul>
// );