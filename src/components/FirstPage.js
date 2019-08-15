import React,{ useState , useEffect} from 'react';
import Header from './Header'
import Fish from './Fish'
import Order from './Order'
import SampleFishes from '../sample-fishes'
import base from '../base'


const FirstPage = () => {
    // States using Hook !
    const [fishes , setFishes] = useState({})
    const [order , setOrder] = useState({})

  // Add_To_Cart method to update order status
  const addToCart = (key) => {
    // copying existing state
    const Order = {...order}
    // formating value to update
    Order[key] = order[key] + 1 || 1;
    // update state
    setOrder(Order)
    
  }
    // Load Fish function
    const loadFish = () => {
        setFishes(SampleFishes)
    }
    // componentDidMount + componentDidUpdate
    useEffect(() => {
        loadFish();
    });

    // store order information to localStroge
    useEffect(() => {
        localStorage.setItem(`order-{props.match.params.storeId}` , JSON.stringify(order))
    });

    // render localStronge Data after Refreshing window
    useEffect(() => {
        // grab the items form localStorage
        const storage = localStorage.getItem(`order-{props.match.params.storeId}`)
        // checking is localStroge is available or not !
        if(localStorage) {
            setOrder(JSON.parse(storage))
        }
    }, []);


    return (
        <div className="catch-of-the-day"> 
            <div className="menu">
                <Header tagLine="Fresh SeaFood Market"/>
                <ul className="list-of-fishes">
                    {
                    Object.keys(fishes).map(key =>
                        <Fish 
                            key={key}
                            item={fishes[key]}
                            addToCart={addToCart}
                            serial={key}
                        />)
                    }
                </ul>
            </div>
        <Order fishes={fishes} order={order}/>
        </div>
    );
}

export default FirstPage;
