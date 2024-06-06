import { useState } from 'react';
import { icp_backend } from 'declarations/icp_backend';

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(true);

  // const [greeting, setGreeting] = useState('');
  const [setName, setSettedName] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   icp_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  function handleSubmitSetName(event) {
    event.preventDefault();
    const nameSetted = event.target.elements.nameSet.value;
    setMostrarComponente(false)
    icp_backend.setName(nameSetted).then((nameSet) => {
      setSettedName(nameSet);
    });
    return false;
  }
  return (

    <main>
      
      <h1>Node-Nosh</h1>
      

      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && 
        <form action="#" onSubmit={handleSubmitSetName}>
          <label htmlFor="nameSet">Enter your name as a waiter: &nbsp;</label>
          <input id="nameSet" alt="Name" type="text" className="form-control" />
          <button type="submit" className="btn btn-primary">Set name</button>
        </form>
        }
        <section id="setName">{setName}</section>
        
      </div>
    </main>
  );
}

export default App;
