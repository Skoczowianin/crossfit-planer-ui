import { faker } from '@faker-js/faker';
import React from 'react'
import './exercise.css'

const Exercise = () => {
    function imageAvatar() {
        const randomAvatar = faker.image.avatar();
        console.log(randomAvatar)
        return randomAvatar;

    }
    function description() {
        const randomDescription = faker.word.words();
        console.log(randomDescription)
        return randomDescription;
    }
    function title() {
        const randomTitle = faker.person.jobTitle();
        console.log(randomTitle)
        return randomTitle;
    }
    function reps() {
        const randomReps = faker.number.int({min: 1, max: 10})
        console.log(randomReps)
        return randomReps;
    }
   
    function generateType() {
        const randomType = faker.number.int({min: 0, max: 1});
        if(randomType == 1) {
            let setType = "repetitions"
            return setType;
        } else {
           let setType = "seconds"
            return setType;
        }
    }
  return (
    
    <div className='exercise'>
       <div ><img src={imageAvatar()}></img></div>
       <div>{description()}</div>
       <div>{title()}</div>
        <div>{reps()}</div>
        <div>{generateType()}</div>
    </div>
  )
}

export default Exercise