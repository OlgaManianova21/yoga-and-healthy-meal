
const Item = ({item}) => {
    return(<div>
<img src={`./${item.img}.avif`} width='500px'/>
<h2>{item.name}</h2>
<p>$ {item.price}</p>

{/* to fix later*/}
<button>How many portion?</button>

<button>Add to cart</button>
    </div>)
}
export default Item;