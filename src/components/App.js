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

  state = {
    fishes: {},
    order: {}
  }

  loadFish() {
    this.setState({
      fishes:SampleFishes
    })
  }

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


  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh SeaFood Market"/>
          <ul className="list-of-fishes">
              {
                Object.keys(this.state.fishes)
                .map(key => <Fish key={key} item={this.state.fishes[key]}/>)
              }
            </ul>
        </div>
        <Order/>
        <Inventory
          loadFish={this.loadFish}
          addFish={this.addFish}
        />
      </div>
    )
  }
}

export default App;