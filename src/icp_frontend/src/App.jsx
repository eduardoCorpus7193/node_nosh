import { useState } from 'react';
import Products from './components/products';
import { icp_backend } from 'declarations/icp_backend';

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarTotal, setMostrarTotal] = useState(false);

  const [setName, setSettedName] = useState('');
  const [total, setTotal] = useState('');

  function handleSubmitSetName(event) {
    event.preventDefault();
    const nameSetted = event.target.elements.nameSet.value;
    setMostrarComponente(false)
    icp_backend.setName(nameSetted).then((nameSet) => {
      setSettedName(nameSet);
    });
    return false;
  }

  function finishOrder(event) {
    event.preventDefault();
    setMostrarTotal(true);
    icp_backend.setTotal().then((newTotal) => {
      setTotal(newTotal);
    });
    return false;
  }

  function finishDay(event) {
    event.preventDefault();
    icp_backend.finishDay().then((finishDayStr) => {
      alert(finishDayStr);
    });
    return false;
  }

  return (

    <main>
      <h1>Node-Nosh</h1> 

      

      <div className={mostrarTotal ? "show-element" : null}>
        {mostrarTotal &&
          <><h3>Total: $<span id="totalSet">{total}</span></h3></>
      }
      </div>

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
      
    
      <Products />  

      <div className='d-flex justify-content-around'>
        <button onClick={finishOrder} type='submit' className='btn btn-outline-warning'>Finish order</button> 
        <button onClick={finishDay} type='submit' className='btn btn-danger'>Finish day</button> 
      </div>

    </main>
  );
}

export default App;
