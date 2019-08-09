import React, { Component } from 'react'

import {getFunName} from '../helpers'

class StorePicker extends Component {

    // Search Handler
    searchStore(e) {
        // preventing default ( sending data to form targeted actions )
        e.preventDefault();
        // grab the input data value
        const storeId = this.textField.value
        // redirect link based on the data we've grabbed now
        this.props.history.push(`store/${storeId}`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.searchStore(e)}>
                <h2>Enter a Shop Name</h2>
                
                <input
                    type="text"
                    placeholder="Store Name"
                    ref={(input) => {this.textField = input}}
                    defaultValue={getFunName()} 
                />
                <button type="submit">Search for Store</button>
            </form>
        )
    }
}

export default StorePicker;