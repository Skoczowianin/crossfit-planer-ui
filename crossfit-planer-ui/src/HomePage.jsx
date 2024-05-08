import { Link } from 'react-router-dom'
import React from 'react'


const HomePage = () => {
  return (
    <div>
        <Link 
        to='/template'
        >
        <span>
            Template
        </span>
        </Link>
        <h1>Crossfit Planer UI</h1>
    </div>
  )
}

export default HomePage