import React from 'react'

const FunctionalClick = () => {
    const clickHandler=()=>{
        console.log("Button Clicked...");
    }
  return (
    <div>
        {/* always use this*/}
      <button onClick={clickHandler}>Click</button>
      
      {/* don't use this becase its function call and it's already in log so don't use */}
      {/*<button onClick={clickHandler()}>Click</button>*/}
    </div>
  )
}

export default FunctionalClick
