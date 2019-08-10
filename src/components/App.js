import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import SampleFishes from '../sample-fishes'


class App extends React.Component{
  // binding methods for using everywhere
  loadFish = this.loadFish.bind(this)
  addFish = this.addFish.bind(this)
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


  // Add_To_Cart method to update order status
  addToCart(key) {
    // copying existing state
    const order = {...this.state.order}
    // formating value to update
    order[key] = order[key] + 1 || 1;
    // update state
    this.setState({ order })
  }


  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh SeaFood Market"/>
          <ul className="list-of-fishes">
              {
                Object.keys(this.state.fishes)
                .map(key => <Fish 
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
        />
      </div>
    )
  }
}

export default App;