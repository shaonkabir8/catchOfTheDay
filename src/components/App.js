import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import SampleFishes from '../sample-fishes'


class App extends React.Component{
  // binding methods for using everywhere
  loadFish = this.loadFish.bind(this)

  state = {
    fishes: {},
    order: {}
  }


  loadFish() {
    this.setState({
      fishes:SampleFishes
    })
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
        <Inventory loadFish={this.loadFish}/>
      </div>
    )
  }
}

export default App;