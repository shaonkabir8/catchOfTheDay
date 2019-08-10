import React from 'react'
import {formatPrice} from '../helpers'

class Fish extends React.Component{
    render() {
        const {item, serial,addToCart} = this.props;
        const isAvilable = item.status === 'available'
        const btnText = isAvilable ? 'Add to Cart' : 'Sold Out'
        return(
            <li className="menu-fish">
                <img src={item.image} alt={item.name}/>
                <h3 className="fish-name">
                    {item.name}
                    <span className="price">{formatPrice(item.price)}</span>
                </h3>
                <p>{item.desc}</p>
                <button onClick={() => addToCart(serial)} disabled={!isAvilable}>{btnText}</button>
            </li>
        )
    }
}

export default Fish;