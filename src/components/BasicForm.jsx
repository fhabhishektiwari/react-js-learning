import React, { useState } from 'react';
import './formStyles.css';

function BasicForm() {
    const intialField={
        username:'',
        comments:'',
        department:'default'
    }
    const [formData,setFormData]=useState(intialField);

    const {username,comments,department}=formData;

    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`${username} ${comments} ${department}`)
    }
    return (
        <form onSubmit={handleSubmit} className='main-form'>
            <h3>Basic form</h3>
            <div>
                <label htmlFor="username">Username</label>
                <input name='username' placeholder='Enter username' value={username} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="comments">Comments</label>
                <textarea name='comments' placeholder='Type comments...' value={comments} onChange={handleInputChange}></textarea>
            </div>
            <div>
                <label htmlFor="department">Department</label>
                <select name="department" value={department} onChange={handleInputChange}>
                    <option value="default">---Choose Option---</option>
                    <option value="developer">Developer</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="electrical">Electrical</option>
                    <option value="hrmanagement">HR Management</option>

                </select>
            </div>
            <button className='button' type="submit">Submit</button>
        </form>
    )
}

export default BasicForm
