import React from 'react';
import { icp_backend } from 'declarations/icp_backend';

function Products() {
    //Quesadilla function
    function handleSubmitMiso(event) {
        event.preventDefault()
        icp_backend.setSubTotal(40.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    //Ramen function
    function handleSubmitShio(event) {
        event.preventDefault()
        icp_backend.setSubTotal(65.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    //Taco function
    function handleSubmitShoyu(event) {
        event.preventDefault()
        icp_backend.setSubTotal(15.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    //Torta function
    function handleSubmitTonkotsu(event) {
        event.preventDefault()
        icp_backend.setSubTotal(55.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    return (  
        <div>
            <form action="#" onSubmit={handleSubmitMiso}>
                <h2>Ramen Miso</h2> <h3>....$50</h3>
                <p>Se caracteriza por su</p>
                <button type="submit" className="btn btn-info">+</button>
            </form>
            <form action="#" onSubmit={handleSubmitRamen}>
                <h2>Ramen Shio</h2> <h3>......$65</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
            <form action="#" onSubmit={handleSubmitTaco}>
                <h2>Ramen Shoyu</h2> <h3>......$15</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
            <form action="#" onSubmit={handleSubmitTorta}>
                <h2>Ramen Tonkotsu</h2> <h3>......$55</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
        </div>
    );
}
export default Products;