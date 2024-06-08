import { useState } from 'react';
import Products from './components/products';
import { icp_backend } from 'declarations/icp_backend';

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarIngresarMesa, setMostrarIngresarMesa] = useState(false);
  const [mostrarTotal, setMostrarTotal] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const [setName, setSettedName] = useState('');
  const [setTableName, setSettedTableName] = useState('');
  const [total, setTotal] = useState('');

  function handleSubmitSetName(event) {
    event.preventDefault();
    const nameSetted = event.target.elements.nameSet.value;
    setMostrarComponente(false)
    setMostrarIngresarMesa(true);
    icp_backend.setName(nameSetted).then((nameSet) => {
      setSettedName(nameSet);
    });
    return false;
  }

  function handleSubmitSetTableName(event) {
    event.preventDefault();
    const tableNameSetted = event.target.elements.tableNameSet.value;
    setMostrarMenu(true);
    setMostrarIngresarMesa(false);
    icp_backend.setTableName(tableNameSetted).then((tableNameSet) => {
      setSettedTableName(tableNameSet);
    });
    return false;
  }

  function finishOrder(event) {
    event.preventDefault();
    setMostrarTotal(true);
    setMostrarMenu(false);
    setMostrarIngresarMesa(true);
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

      <div className={mostrarIngresarMesa ? "show-element" : null}>
        {mostrarIngresarMesa &&

          <form action="#" onSubmit={handleSubmitSetTableName}>
            <label htmlFor="tableNameSet">Enter the table name: &nbsp;</label>
            <input id="tableNameSet" alt="Table name" type="text" className="form-control" />
            <button type="submit" className="btn btn-primary">Set table name</button>
          </form>
      }
      
      </div>
      

      <div className={mostrarMenu ? "show-element" : null}>
        {mostrarMenu &&
          <>
            <section id="setTableName">{setTableName}</section>
            <Products />
          </>
        }
      </div>  

      <div className='d-flex justify-content-around'>
        <button onClick={finishOrder} type='submit' className='btn btn-outline-warning'>Finish order</button> 
        <button onClick={finishDay} type='submit' className='btn btn-danger'>Finish day</button> 
      </div>

      <div className={mostrarTotal ? "show-element" : null}>
        {mostrarTotal &&
          <><p>Total: <span id="totalSet">{total}</span></p></>
      }
      </div>

    </main>
  );
}

export default App;
