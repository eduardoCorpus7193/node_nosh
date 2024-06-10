import { useState } from 'react';
import Products from './components/products';
import { icp_backend } from 'declarations/icp_backend';

function App() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".navbar").classList.add("shrink");
      document.querySelector(".welcome-slogan").style.opacity = "0";
    } else {
      document.querySelector(".navbar").classList.remove("shrink");
      document.querySelector(".welcome-slogan").style.opacity = "1";
    }
  }


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

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

      <nav class="navbar navbar-light bg-light">
        <div class="nav-logo-disposition">
            <div class="header-node-nosh">NODE-NOSH</div>
            <div class="header-restaurant">Restaurant</div>
            <h2 className="waiter-name"><section id="setName">{setName}</section></h2>
            <h2 className="waiter-name"><section id="setTableName">{setTableName}</section></h2>
        </div>
        <div class="welcome-slogan">
            <div><h1 class="welcome-node-nosh">NODE-NOSH</h1></div>
            <div><p class="slogan-node-nosh">"El mejor lugar para disfrutar de una buena comida".</p></div>
        </div>
    

      </nav>
    <div className="content-container">


        <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && 

          <form action="#" onSubmit={handleSubmitSetName}>
            <div className="title"><label htmlFor="nameSet">Establecer nombre de mesero: &nbsp;</label></div>
            <div className="input-group mb-3 waiter-input">
                <input id="nameSet" type="text" className="form-control waiter-input-design" placeholder="Jhon Doe" aria-label="Jhon Doe" aria-describedby="basic-addon2" />
            </div>
            <button type="submit" className="btn btn-primary order-design">Aceptar</button>
          </form>

        }
      </div>

      <div className={mostrarIngresarMesa ? "show-element" : null}>
        {mostrarIngresarMesa &&

          <form action="#" onSubmit={handleSubmitSetTableName}>
            <div className="title"><label htmlFor="tableNameSet">Establece nombre de la mesa: &nbsp;</label></div>
              <div className="input-group mb-3 waiter-input">
                  <input id="tableNameSet" type="text" className="form-control waiter-input-design" placeholder="Mesa Terraza 5" aria-label="Mesa Terraza 5" aria-describedby="basic-addon2" />
              </div>
            <button type="submit" className="btn btn-primary order-design">Aceptar</button>
          </form>
      }      
      </div>
      

      <div className={mostrarMenu ? "show-element" : null}>
        {mostrarMenu &&
          <>

      <div className="title"> 
            Realiza tu orden 
      </div>

      <div className="cards-disposition">

        <Products />

      </div>
        
        <div className="buttons">
      
            <div className="finish-button">
              <button type="button" onClick={finishOrder} class="btn btn-primary order-design">Terminar orden</button>
            </div>

        </div>

        </>
        }

        <div className={mostrarTotal ? "show-element" : null}>
          {mostrarTotal &&
            <>
              <div className="total-container">
                <div>
                  <h2 className="total-text" id="totalSet">{total}</h2>
                </div>
              </div>
            
              <div className="buttons">
                
                <div className="finish-button">
                    <button type="button" onClick={finishDay} className="btn btn-primary finish-design">Finalizar dia</button>
                </div>

              </div>
            
            
            </>
          }
        </div>

      </div>  

        <footer className="footer">
            <div className="footer-text">
                <p className="text-fooder"><span className="bi bi-copyright"></span> 2024 NODE-NOSH Restaurant. Todos los derechos reservados.</p>
                <p className="text-fooder"><span className="bi bi-geo-alt"></span> Dirección: 123 Imaginary Street, Monaco City, Monaco</p>
                <p className="text-fooder"><span className="bi bi-telephone"></span> Teléfono: 4495103420</p>
            </div>
        </footer>
    </div>

    












      

      

    </main>
  );
}

export default App;
