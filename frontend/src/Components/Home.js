import React from 'react'

const Home = () => {
  const url = 'http://localhost:7000'
  return (
    <div>
       <div>
       <img  style={{width:"100%"}} src={url+'/assets/background-features.jpg'} alt="" />

       </div>
    </div>
  )
}

export default Home