import { useState } from 'react';
import { icp_backend } from 'declarations/icp_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [editName, setEditName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    icp_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    const nameEdited = event.target.elements.nameEdit.value;
    icp_backend.editName(nameEdited).then((nameEdit) => {
      setEditName(nameEdit);
    });
    return false;
  }

  return (
    
    <main>
      
      <h1>Node-Nosh restaurant</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name as a waiter: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <form action="#" onSubmit={handleSubmitEdit}>
        <label htmlFor="nameEdit">Enter your name: &nbsp;</label>
        <input id="nameEdit" alt="Name" type="text" />
        <button type="submit">Edit name</button>
      </form>
      <section id="editName">{editName}</section>

    </main>
  );
}

export default App;
