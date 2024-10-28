import { useSelector } from "react-redux";
import dataItems from "../data/dataItems";
import Item from "./Item";
import { getSelectedCategory } from "../Redux/CategorySlice";

const Items = () => {
const selectedCategory = useSelector(getSelectedCategory);

    return(<div>
{dataItems
.filter(item => {
    if (selectedCategory === 'ALL') return true;
    return selectedCategory === item.category;
})
.map(item => <Item item={item}/>)}
    </div>)
}
export default Items;