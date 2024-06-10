import React from 'react';
import { icp_backend } from 'declarations/icp_backend';

import aguaPedinoMenta from "./images/aguaPedinoMenta.jpg";
import alfredo from "./images/alfredo.jpg";
import alfredoCamarones from "./images/alfredoCamarones.jpg";
import alfredoPollo from "./images/alfredoPollo.jpg";
import ensaladaCesar from "./images/ensaladaCesar.jpg";
import ensaladaEspinacasFresas from "./images/ensaladaEspinacasFresas.jpg";
import hambu from "./images/hambu.jpg";
import hambuPollo from "./images/hambuPollo.jpg";
import hambuVegetariana from "./images/hambuVegetariana.jpg";
import limonada from "./images/limonada.jpg";
import sodaNaranja from "./images/sodaNaranja.jpg";
import teHelado from "./images/teHelado.jpg";


function Products() {
    //Quesadilla function
    function handleSubmitFresas(event) {
        event.preventDefault()
        icp_backend.setSubTotal(175.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    //Ramen function
    function handleSubmitCesar(event) {
        event.preventDefault()
        icp_backend.setSubTotal(150.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    //Taco function
    function handleSubmitTe(event) {
        event.preventDefault()
        icp_backend.setSubTotal(70.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    //Torta function
    function handleSubmitNaranjada(event) {
        event.preventDefault()
        icp_backend.setSubTotal(45.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    //Chilaquiles function
    function handleSubmitLimonada(event) {
        event.preventDefault()
        icp_backend.setSubTotal(60.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    //Licuado function
    function handleSubmitPepino(event) {
        event.preventDefault()
        icp_backend.setSubTotal(70.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    function handleSubmitAlfredo(event) {
        event.preventDefault()
        icp_backend.setSubTotal(180.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    function handleSubmitPollo(event) {
        event.preventDefault()
        icp_backend.setSubTotal(200.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    function handleSubmitCamarones(event) {
        event.preventDefault()
        icp_backend.setSubTotal(190.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    function handleSubmitHclasica(event) {
        event.preventDefault()
        icp_backend.setSubTotal(170.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    function handleSubmitHpollo(event) {
        event.preventDefault()
        icp_backend.setSubTotal(190.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    function handleSubmitHvegetariana(event) {
        event.preventDefault()
        icp_backend.setSubTotal(190.0).then((subTotal) => {
            alert("El subtotal es " + subTotal);
        });
        return false;
    }

    return (
        <>
            <div className="card" >
                <div className="img-body">
                    <img src={aguaPedinoMenta} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Agua de Pepino y Menta</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Agua infusionada con rodajas de pepino fresco y hojas de menta, ideal para hidratarse y refrescarse en cualquier momento del día.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$70.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitPepino}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={limonada} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Limonada Clásica</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Refrescante limonada hecha con jugo de limones frescos, azúcar y agua, servida bien fría con hielo y una rodaja de limón.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$60.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitLimonada}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={sodaNaranja} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Soda de Naranja</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Bebida gaseosa de naranja con un toque de jugo de naranja natural, burbujeante y revitalizante, perfecta para cualquier comida.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$45.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitNaranjada}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={teHelado} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Té Helado</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Té negro infusionado y servido con hielo, acompañado de rodajas de limón y endulzado ligeramente para un sabor refrescante.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$70.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitTe}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card" >
                <div className="img-body">
                    <img src={ensaladaCesar} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Ensalada César</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Lechuga romana mezclada con aderezo César casero, crutones dorados y un toque de queso parmesano rallado, servida con pechuga de pollo a la parrilla.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$150.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitCesar}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={ensaladaEspinacasFresas} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Ensalada de Fresas</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Frescas hojas de espinaca mezcladas con rodajas de fresa, queso de cabra, nueces caramelizadas y un aderezo de vinagreta balsámica.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$175.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitFresas}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card" >
                <div className="img-body">
                    <img src={alfredo} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Fettuccine Alfredo</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Pasta fettuccine cocida a la perfección, bañada en una rica y cremosa salsa Alfredo hecha con mantequilla, ajo, crema y queso parmesano rallado.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$180.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitAlfredo}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={alfredoPollo} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Fettuccine con Pollo</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Deliciosos fettuccine combinados con trozos de pechuga de pollo salteada y cubiertos con una suave salsa Alfredo de queso parmesano.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$200.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitPollo}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={alfredoCamarones} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Fettuccine con Camarones</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Fettuccine cocidos al dente y acompañados de jugosos camarones salteados en ajo y vino blanco, bañados en una cremosa salsa Alfredo.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$190.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitCamarones}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card" >
                <div className="img-body">
                    <img src={hambu} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Hamburguesa Clásica</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Jugosa carne de res a la parrilla acompañada, de lechuga fresca, tomate, cebolla, pepinillos y una generosa porción de queso cheddar derretido.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$170.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitHclasica}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={hambuPollo} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Hamburguesa de Pollo</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Pechuga de pollo empanizada y frita, servida en un pan de hamburguesa con lechuga fresca, rodajas de tomate, cebolla y mayonesa.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$190.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitHpollo}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="card" >
                <div className="img-body">
                    <img src={hambuVegetariana} className="card-img-top img-disposition" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">Hamburguesa Vegetariana</h5>
                    </div>
                    <div className="card-text">
                        <p className="card-text">Sabrosa hamburguesa hecha de un patty de garbanzos y verduras, servida con lechuga, tomate, cebolla y una salsa de yogur y menta en un pan integral.</p>
                    </div>
                </div>
                <div className="price-button-container">
                    <div>
                        <p className="card-price price-style">$190.00</p>
                    </div>
                    <div className="card-button">
                        <form action="#" onSubmit={handleSubmitHvegetariana}>
                            <button type="submit" className="btn btn-primary botton-style">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Products;