import React from 'react';
import { icp_backend } from 'declarations/icp_backend';

function Products() {
    function handleSubmitQuesadilla(event) {
        event.preventDefault()
        icp_backend.setSubTotal(50.0).then((subTotal) => {
            alert("The subtotal is " + subTotal);
        });
        return false;
    }

    return (
        <form action="#" onSubmit={handleSubmitQuesadilla}>
            <h2>Quesadilla</h2> <h3>$50</h3>
            <button type="submit" className="btn btn-primary">Anadir quesadilla</button>
        </form>
    );
}
export default Products;