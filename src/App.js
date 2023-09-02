import Item from './component/item'

export default function App() {
  return (
    <div className="App">
      <h1>To-do App</h1>

      <Item task='Wash dishes' />
      <Item task='Water plants' />

    </div>
  );
}

