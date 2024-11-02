import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="main">
<h1 className="header">Check out our products!</h1>
{['BOOTLE', 'SHAKER', 'PROTEIN', 'PROTEIN BAR', 'ALL']
.map(category => <Filter key={category} category={category}/> 
)}
    </div>)
}
export default AllCategories;