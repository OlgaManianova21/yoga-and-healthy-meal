import { data } from './sportdata';
import Buttons from '../Exercises/Buttons';
import Exercises from '../Exercises/Exercises';
import { useState } from 'react';
import './Exercises.css';
import Woman from './Woman';

function Workout () {

    const [exercise, setExercise] = useState(data);

    const chosenExercises = (searchTerm) => {
      
        const newExercises = data.filter(element => element.searchTerm.includes(searchTerm));
        setExercise(newExercises);
    }

    return(
       <div>
       <Woman/>
        <Buttons filteredExercises = {chosenExercises}/>
        <Exercises homeExercises = {exercise}/>
      </div>
    )
}
export default Workout;
