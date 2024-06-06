import React from 'react';
import { icp_backend } from 'declarations/icp_backend';

function Products() {
    //Quesadilla function
    function handleSubmitQuesadilla(event) {
        event.preventDefault()
        icp_backend.setSubTotal(40.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    //Ramen function
    function handleSubmitRamen(event) {
        event.preventDefault()
        icp_backend.setSubTotal(65.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    //Taco function
    function handleSubmitTaco(event) {
        event.preventDefault()
        icp_backend.setSubTotal(15.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    //Torta function
    function handleSubmitTorta(event) {
        event.preventDefault()
        icp_backend.setSubTotal(55.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    return (  
        <div>
            <form action="#" onSubmit={handleSubmitQuesadilla}>
                <h2>Quesadilla</h2> <h3>....$50</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
            <form action="#" onSubmit={handleSubmitRamen}>
                <h2>Ramen</h2> <h3>......$65</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
            <form action="#" onSubmit={handleSubmitTaco}>
                <h2>Taco</h2> <h3>......$15</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
            <form action="#" onSubmit={handleSubmitTorta}>
                <h2>Torta</h2> <h3>......$55</h3>
                <button type="submit" className="btn btn-info">+</button>
            </form>
        </div>
    );
}
export default Products;