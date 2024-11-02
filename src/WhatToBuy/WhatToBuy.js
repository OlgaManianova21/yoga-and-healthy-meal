import Cart from './Cart/Cart';
import AllCategories from './Filter/AllCategories';
import Items from './ItemsComponent/Items';
import './WhatToBuy.css';

function WhatToBuy () {
    return(<div className='whatToBuyContainer'>
        <div className='block'>
        <AllCategories/>
        <Cart/>
        </div>

        <div className='block'>
        <Items/>
        </div>
        </div>)
}
export default WhatToBuy;