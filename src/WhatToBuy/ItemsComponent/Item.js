import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const Item = ({item}) => {

const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

    return(<div className="main">
<img src={`./${item.img}.avif`} width='500px' alt="icon"/>
<h2>{item.name}</h2>
<p>$ {item.price}</p>

<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

<button onClick={() => {dispatch(addItemToCart({item, quantity}));
}}>Add to cart</button>
    </div>)
}
export default Item;