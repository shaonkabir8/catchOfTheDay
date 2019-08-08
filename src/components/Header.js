import React,{Component} from 'react'

class Header extends Component{
    render() {
        return(
            <div className="menu">
                <h1>
                    Catch
                    <span className="ofthe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    Day
                </h1>
            </div>
        )
    }
}

export default Header;