import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import SampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component{
  // binding methods for using everywhere
  loadFish = this.loadFish.bind(this)
  addFish = this.addFish.bind(this)
  updateFish = this.updateFish.bind(this)
  deleteFish = this.deleteFish.bind(this)
  addToCart = this.addToCart.bind(this)

  // our state
  state = {
    fishes: {},
    order: {}
  }

  // Load Fish method to display fishes on App component
  loadFish() {
    this.setState({
      fishes:SampleFishes // "SampleFishes" is provided by wes bos
    })
  }

  // Add Fish method to add new fish to Store
  addFish(fish) {
    // copying the existing state
    const fishes = {...this.state.fishes}
    // genetating Unique ID
    const timeTamp = Date.now()
    // to send data , creating a format
    fishes[`fish-${timeTamp}`] = fish
    // update state
    this.setState({ fishes })
  }

  // update Fish method
  updateFish(key,updatedFish) {
    // copying extisting state
    const fishes = {...this.state.fishes};
    // formating structure
    fishes[key] = updatedFish;
    // update state
    this.setState({ fishes })
  }

  // Delete Fish Method
  deleteFish(key) {
    // copying existing state
    const fishes = {...this.state}
    // formating structrue
    fishes[key] = null;
    // update state
    this.setState({ fishes })

  }

  // Add_To_Cart method to update order status
  addToCart(key) {
    // copying existing state
    const order = {...this.state.order}
    // formating value to update
    order[key] = order[key] + 1 || 1;
    // update state
    this.setState({ order })
  }

  // to display item even userers are logged in or not !
  componentDidMount() {
    this.loadFish()
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes` , {
      context:this,
      state: 'fishes'
    })
    // get localStronge Item
    const localStorageRef = localStorage
    .getItem(`order-{this.params.match.storeId}`)
    
    // checking is localStroge is available or not !
   if(localStorageRef) {
      // update our state
      this.setState({
        order: JSON.parse(localStorageRef)
      })
   }
  }

  componentWillUpdate(nextProp, nextState) {
    // set item to localStroge
    localStorage.setItem(`order-{this.params.match.storeId}` , JSON.stringify(nextState.order))
  }

  render() {
    return(
      <div className="catch-of-the-day"> 
        <div className="menu">
          <Header tagLine="Fresh SeaFood Market"/>
          <ul className="list-of-fishes">
              {
                Object.keys(this.state.fishes)
                .map(key =>
                  <Fish 
                    key={key}
                    item={this.state.fishes[key]}
                    addToCart={this.addToCart}
                    serial={key}
                  />)
              }
            </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          loadFish={this.loadFish}
          addFish={this.addFish}
          updateFish={this.updateFish}
          fishes = {this.state.fishes}
          deleteFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    )
  }
}

export default App;