import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

export default class Inventory extends Component {

    render() {
        
        return (
            <div>
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadFish}>Load Fish</button>
            </div>
        )
    }
}
