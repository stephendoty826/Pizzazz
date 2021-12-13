
import React from 'react'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  return (
    <>
      <div className="container mt-5 d-flex flex-column align-items-center homeContainer">
        <div className="display-1 mt-3">Welcome to <em>Pizzazz</em>!</div> 
        <h1 className="mb-5 mt-4">Pizzazz is a pizza building site I made using <a href="https://reactjs.org/" target="_blank">React</a> & <a href="https://redux.js.org/" target="_blank">Redux</a>.</h1>
        <h2 className="text-center my-3">Be sure to checkout the <a href="#" onClick={()=>navigate("/fan-favs")}>Fan Favs</a> page or the <a href="#" onClick={()=>navigate("/builder")}>Builder</a> page and make pizzas with some awesome topping combinations. </h2>
        <div className="row">
          <div className="col-6">
            <div className="display-6 mt-3 text-center">Fan Favs</div>
            <a href="#" onClick={()=>navigate("/fan-favs")}><img className="homeGIF" height="450px" width="auto" src="/images/fanFavs.gif" alt="" /></a>
          </div>
          <div className="col-6">
          <div className="display-6 mt-3 text-center">Builder</div>
          <a href="#" onClick={()=>navigate("/builder")}><img className="homeGIF" height="450px" width="auto" src="/images/builder.gif" alt="" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
