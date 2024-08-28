import { data } from '../Exercises/Sport';
import Buttons from '../Exercises/Buttons';
import Exercises from '../Exercises/Exercises';
import { useState } from 'react';
import './Exercises.css';

function Workout () {

    const [exercise, setExercise] = useState(data);

    const chosenExercises = (searchTerm) => {
        const newExercises = data.filter(element => element.searchTerm ===searchTerm);
        setExercise(newExercises);
    }

    return(
       <div>
       
        <Buttons filteredExercises = {chosenExercises}/>
        <Exercises homeExercises = {exercise}/>
      </div>
    )
}
export default Workout;
