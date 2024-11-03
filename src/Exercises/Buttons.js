import { useState } from "react";
import { data } from "./sportdata";
import setExercise from './Workout';

function Buttons ({filteredExercises}) {

    const [exercise, setExercise] = useState(data);


    return(
<div className="cont">

    <button className="change" onClick={ () => setExercise(data)}>All</button> 
       
    <button className="change" onClick={ () => filteredExercises("Stretching")}>Stretching</button>
    <button className="change" onClick={ () => filteredExercises("Arms")}>Arms</button>
    <button className="change" onClick={ () => filteredExercises("Legs")}>Legs</button>
    <button className="change" onClick={ () => filteredExercises("Back")}>Back</button>
    <button className="change" onClick={ () => filteredExercises("Press")} >Press</button>
    <button className="change" onClick={ () => filteredExercises("Butt")} >Butt</button>
</div>
    )
}
export default Buttons;