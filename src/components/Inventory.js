import React, { Component } from 'react'

export default class Inventory extends Component {

    render() {
        
        return (
            <div>
                <h2>Inventory</h2>
                <button onClick={this.props.loadFish}>Load Fish</button>
            </div>
        )
    }
}
