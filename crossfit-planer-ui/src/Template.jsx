import React from 'react'
import Exercise from './Exercise'

const Template = () => {


  return (
    <>
    <h2>Miki Training</h2>
    <div>In this page I will show you some exercises</div>
    <div>
        <Exercise 
        image="./src/assets/pushUps.jpg"
        title="Push Ups"
        description="asdasda"
        value={10}
        type="repetitions"
        />
        <Exercise />
        <Exercise />
    </div>
    </>
  )
}

export default Template