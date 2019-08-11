import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

export default class Inventory extends Component {

    // binding methods
    renderInventory = this.renderInventory.bind(this)


	// Main method which is used to update our DOM Element
	handleChange(e,key) {
		const fish = {...this.props.fishes[key]}
		const updatedFish = {
			...fish,
			[e.target.name]: e.target.value
		}
		this.props.updateFish(key,updatedFish)
    }

    // renderInventory Method
	renderInventory(key) {
		const fish = this.props.fishes[key]
		return(
			<div className="fish-edit" key={key} >
				<input ref={(input) => this.name = input} type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e,key)} />
				<input ref={(input) => this.price = input} type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e,key)}  />
				<select onChange={(e) => this.handleChange(e,key)}  ref={(input) => this.status = input} type="text" name="status" value={fish.status} >
					<option value="available">Fresh !</option>
					<option value="unavailable">Sold Out !</option>
				</select>
				<textarea onChange={(e) => this.handleChange(e,key)}  ref={(input) => this.desc = input} type="text" name="desc" value={fish.desc}  placeholder="fish desc"/ >
				<input onChange={(e) => this.handleChange(e,key)}  ref={(input) => this.image = input} type="text" name="image" value={fish.image} placeholder="fish image"/ >
			</div>
		)
	}
	


    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadFish}>Load Fish</button>
            </div>
        )
    }
}
