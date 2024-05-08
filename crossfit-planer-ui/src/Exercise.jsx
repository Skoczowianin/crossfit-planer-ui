import { faker } from '@faker-js/faker';
import React from 'react'
import './exercise.css'

const Exercise = (props) => {
    function imageAvatar() {
        const randomAvatar = faker.image.avatar();
        return randomAvatar;

    }
    function description() {
        const randomDescription = faker.word.words();
        return randomDescription;
    }
    function title() {
        const randomTitle = faker.person.jobTitle();
        return randomTitle;
    }
    function reps() {
        const randomReps = faker.number.int({min: 1, max: 10})
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
       <div ><img src={ props.image ? props.image : imageAvatar()}></img></div>
       <div>{props.title ? props.title : title()}</div>
       <div>{props.description ? props.description : description()}</div>
        <div>{props.reps ? props.reps : reps()}</div>
        <div>{props.type ? props.type : generateType()}</div>
    </div>
  )
}

export default Exercise