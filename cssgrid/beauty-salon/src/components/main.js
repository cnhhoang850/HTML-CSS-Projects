import React from 'react'



const Main = (props) => (
  <main className="site_main">
    <div className="main_content">
      <h1 className= "padded-multiline">
        <span>One Stop Shop For Beauty.</span>
      </h1>
      <div className="main_text">
        {props.children}
      </div> 
    </div>

    <div className="main_aside">
      Lorem Ipsum
    </div>
  </main>
)

export default Main