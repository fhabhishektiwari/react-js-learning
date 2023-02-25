import React from 'react'

// 1st way
// const Greet = ({name,heroName,children}) => {
//   // destucturing props and state

//     // console.log(props);
//   return (
//     <div>
//       <h1>Hello {name}, Good morning, a.k.a {heroName}</h1>
//       {children}
//     </div>
//   )
// }

// export default Greet;

// 2nd way destucturing props and state inside function body
const Greet = (props) => {
  // destucturing props and state
  const {name,heroName,children}=props;

    console.log(props);
  return (
    <div>
      <h1>Hello {name}, Good morning, a.k.a {heroName}</h1>
      {children}
    </div>
  )
}

export default Greet;
