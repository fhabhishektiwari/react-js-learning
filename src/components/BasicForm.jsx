import React, { useState } from 'react'

function BasicForm() {
    const [username,setUsername]=useState('');
    const [comments, setComments] = useState('');
    const [department, setDepartment] = useState('Developer');



    const handleUsernameChange=(event)=>{
        setUsername(event.target.value)
    }

    const handleCommentsChange=(event)=>{
        setComments(event.target.value)
    }

    const handleDepartmentChange=(event)=>{
        setDepartment(event.target.value)
    }

    const handleSubmit=(e)=>{
        alert(`${username} ${comments}${department}`)
        e.preventDefault();
        // console.log(username);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Basic form</h3>
            <div>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label htmlFor="comments">Comments</label>
                <textarea value={comments} onChange={handleCommentsChange}></textarea>
            </div>
            <div>
                <label htmlFor="department">Department</label>
                <select value={department} onChange={handleDepartmentChange}>
                    <option value="developer">Developer</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="electrical">Electrical</option>
                    <option value="hrmanagement">HR Management</option>

                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default BasicForm
