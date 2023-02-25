import React,{Component} from "react";

// destructuring props and state in class components
class Welcome extends Component{
    render(){
        const {name,heroname}=this.props;
        // const {state1,state2}=this.state;
        return(
            <div>Hello {name} a.k.a. {heroname}</div>
        )
    }
}

export default Welcome;