import React from 'react'
import "./home.css"
const Home = ({child}) => {
  return (
    <div>
      
      {child.map((item, index)=>(
        <p>
          {item.id}
        </p>
      ))}
    </div>
  )
}

export default Home

