import dataItems from "../data/dataItems";
import Item from "./Item";

const Items = () => {
    return(<div>
{dataItems.map(item => <Item item={item}/>)}
    </div>)
}
export default Items;