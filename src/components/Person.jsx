import React from 'react'

const Person = ({person}) => {
  return (
    <div>
      <h1>I am {person.name}. I am {person.age} years old. I know {person.skills} skills </h1>
    </div>
  )
}

export default Person
