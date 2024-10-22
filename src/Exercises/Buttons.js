function Buttons ({filteredExercises}) {
    return(
<div className="cont">

    <button className="change" onClick={ () => filteredExercises("")}>All</button> 
       
    <button className="change" onClick={ () => filteredExercises("Stretching")}>Stretching</button>
    <button className="change" onClick={ () => filteredExercises("Arms")}>Arms</button>
    <button className="change" onClick={ () => filteredExercises("Abdominals")}>Abdominals</button>
    <button className="change" onClick={ () => filteredExercises("Legs")}>Legs</button>
    <button className="change" onClick={ () => filteredExercises("Back")}>Back</button>
    <button className="change" onClick={ () => filteredExercises("Press")} >Press</button>
    <button className="change" onClick={ () => filteredExercises("Butt")} >Butt</button>
</div>
    )
}
export default Buttons;