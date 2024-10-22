import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
<h1 className="header">Check out our expert-recommended products.</h1>
{['BOOTLE', 'SHAKER', 'PROTEIN', 'PROTEIN BAR', 'ALL'].
map(category => <Filter category={category}/> 
)}

    </div>)
}
export default AllCategories;