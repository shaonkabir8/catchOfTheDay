import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import firebase from 'firebase/app'
require('firebase/auth')

export default class Inventory extends Component {

	// state for authentication
	state = {
		uid : null,
		owner : null
	}

    // binding methods
	renderInventory = this.renderInventory.bind(this)
	handleChange = this.handleChange.bind(this)
	renderLogin = this.renderLogin.bind(this)
	authenticate = this.authenticate.bind(this)
	logOut = this.logOut.bind(this)


	// life Cycle Method to stay login or storing users data
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
			  // User is signed in.
			  this.authenticate(null,{user})
			}
		  });
	}

	// Handle Change to update fish
	handleChange(e,key) {
		const fish = {...this.props.fishes[key]}
		const updatedFish = {
			...fish,
			[e.target.name]: e.target.value
		}
		this.props.updateFish(key,updatedFish)
    }

    // renderInventory Method to Edit/Update Fish
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
					
                <button onClick={() => this.props.deleteFish(key)}>- Delete Fish</button>
			</div>
		)
	}


	// Authentication
	authenticate(provider) {
		provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(authData => {
			// grab the store information
			const storeRef = firebase.database().ref(this.props.storeId)
			// query the firebase once for the store data
			storeRef.once('value', (snapshot) => {
				const data = snapshot.val() || {}
				// if no owner exitst, we'll claim it
				if(!data.owner) {
					storeRef.set({
						owner: authData.user.uid
					});
				}
				// update state according to firebase database
				this.setState({
					uid: authData.user.uid,
					owner:data.owner || authData.user.uid
				})
				localStorage.setItem('user', authData.user.uid)
			})
		})
		// if any error occoured
		.catch(error => console.log(error));
	}

	// Log in Authentication
	renderLogin() {
		return(
			<nav className="login">
				<h2>Inventory</h2>
				<p>Sign in to manage your Inventory</p>
				<button className="facebook" onClick={()=> this.authenticate('facebook')}>Log in with facebook</button>
				<button className="github" onClick={()=> this.authenticate('github')}>Log in with github</button>
				<button className="twitter" onClick={()=> this.authenticate('email')}>Log in with email</button>
			</nav>
		)
	}

	// Log Out methods
	logOut() {
		firebase.auth().signOut()
		.then(() => {
			// Sign-out successful.
			this.setState({uid:null})
		})
		.catch(error => console.log(error))
	}

    render() {
		// log out button markup
		const logOut = <button onClick={this.logOut}>Log Out</button>
		// checking if no User Id found
		if(!this.state.uid) {
			return <div>{this.renderLogin()}</div>
		}

		// checking if store owner found or not !
		if(this.state.uid !== this.state.owner) {
			return (
				<div>
					<p> Sorry, You are not the Owner of this Shop</p>
					{logOut}
				</div>
			)
		}
        return (
            <div>
                <h2>Inventory</h2>
				{logOut}
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadFish}>Load Fish</button>
            </div>
        )
    }
}
