import React from 'react'

import Header from './components/Header'


class App extends React.Component{
  render() {
    return(
      <div className="catch-of-the-day">
        <Header title="Catch Of The Day"/>
      </div>
    )
  }
}

export default App;