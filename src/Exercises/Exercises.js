import { useState } from 'react';
import './Exercises.css';

function Exercises({homeExercises}) {

    const [showMore, setShowMore] = useState(false);

    return(  <div className='products'>
         {homeExercises.map((element => {
            const{id, name,searchTerm, image, description } = element;
            return( 
                <div className="product-card" key={id}>
                    <h3>{name}</h3>
                    <img className='imgExercise' src= {image} width="500px" alt='exercises'/>
                <div className='product-info'>
<h5>{showMore ? description: description.substring(0,220) + "..." }
    <button className='showLess' onClick={() => setShowMore (!showMore)}>{showMore ? "Show less" : "Show more"}</button>
</h5>
                </div>
                </div>
            )
         }))}   
        </div>
    ) 
}
export default Exercises;