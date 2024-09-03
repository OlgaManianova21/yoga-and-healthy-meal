function MyRecipiesComponent({label, image, calories, ingredients}) {
    return (
<div>
    <div className="container">
    <h1 className="headerRecipies">{label}</h1>
    </div>

    <div className="container">
    <img src={image} alt="dish"/>
    </div>
    
    <div className="container">
<ul className="container list">
{ingredients.map ((ingredient,index) => (
    <li key={index}> 
        <img src="https://img.icons8.com/?size=100&id=7690&format=png&color=000000" className="icon"/>
        {ingredient}</li>
))}
</ul>
    </div>
    <div className="container">
    <p>{calories.toFixed()} calories</p>
    </div>
</div>
    )
}
export default MyRecipiesComponent;