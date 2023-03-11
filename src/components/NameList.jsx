import React from 'react'
import Person from './Person';

// const persons = [
//     { id: 1, name: 'Rahul', age: 25, skills: 'react js' },
//     { id: 2, name: 'Rahul', age: 25, skills: 'react js' },
//     { id: 3, name: 'Amit', age: 23, skills: 'vue js' },
//     { id: 4, name: 'Anirudh', age: 27, skills: 'node js' },
//     { id: 5, name: 'Jaish', age: 24, skills: 'angular js' },
//     { id: 6, name: 'Mohit', age: 24, skills: 'javaScript' },

// ];

const NameList = () => {
    const names=['Rahul','Shivam','Saurabh','Rahul'];
    // const nameList = names.map((name,index) => <h2 key={name}>{name}</h2>)
    const nameList = names.map((name,index) => <h2 key={index}> {index}{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
