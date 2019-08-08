import React from 'react'
import {render} from 'react-dom';
import './css/style.css'

const Root = () => {
    return(
        <div>
            <h3>Hello</h3>
        </div>
    )
}

render(<Root/> , document.querySelector('#root'))