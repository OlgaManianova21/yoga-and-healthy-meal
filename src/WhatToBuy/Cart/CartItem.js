import dataItems from "../data/dataItems";
import { removeItemFromCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
   
const items = dataItems.find(element => element.id === cartItem.itemId)

const dispatch = useDispatch();

    return(<div>
        <p>{items.name}</p>
     <p>{cartItem.quantity} item(s)</p>
     <p>Price:$ {items.price * cartItem.quantity}</p>
     <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
     <img className="iconGarbige" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width= "20px" alt="garbige"/> 
    </span>
    </div>)
}
export default CartItem;