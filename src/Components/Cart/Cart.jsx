/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import './cart.css'

const Cart = ({selectedActor,totalRemaining,totalCost}) => {
    console.log(selectedActor);
    return (
        <div>
            <h5>Total Actors : {selectedActor.length}</h5>
            <h5>Remaining Balance : {totalRemaining}</h5>
            <h5>Total-cost : {totalCost}</h5>
            {
                selectedActor.map((actor)=>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;