// Conditional Rendering
// 1.if-else approach
// 2.Element variables
// 3.ternary conditional operator
// 4.Short circuit operator

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,//false
        }
    }
    render() {
        //1st. if else
        {/*if(this.state.isLoggedIn){
        return(
            <div>Welcome Abhishek</div>
        )
    }else{
        return (
            <div>Welcome Guest</div>
        ) 
    }*/}

        //2.nd approach element variables   
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Abhishek</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )

        // 3rd. ternary methods
        // return(
        //     this.state.isLoggedIn?(
        //     <div>Welcome Abhishek Tiwari</div>):(
        //     <div>Welcome Guest</div>)
        // ) 

        // 4th. short circuit operator
        return this.state.isLoggedIn && <div>Welcome Abhishek Tiwari</div>


    }
}

export default UserGreeting
