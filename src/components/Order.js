import React from 'react'
import {formatPrice} from '../helpers'

class Order extends React.Component{

    // binding methods to user 'this' keyword inside method
    renderOrder = this.renderOrder.bind(this);

    // Render Order to display Order Status
    renderOrder(key) {
        const fish = this.props.fishes[key]
        const count = this.props.order[key]

        if(!fish || fish.status === 'unavailable') {
            return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
        }
        return(
            <li key={key}>
                <span>{count} Kg {fish.name}</span>
                <span className="price">{formatPrice(count * fish.price)}</span>
            </li>
        )
    }

    render() {
        const orderId = Object.keys(this.props.order);
        const total = orderId.reduce((prev,key) => {
            const fish = this.props.fishes[key]
            const count = this.props.order[key]
            const isAvailable = fish && fish.status === 'available'

           if(isAvailable) {
               return prev + (count * fish.price || 0)
           }
           return prev

        },0)
        return(
            <div className="order-wrapper">
                <h2>Your Order</h2>
                <ul className="order">
                    { orderId.map(this.renderOrder) }
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Order;