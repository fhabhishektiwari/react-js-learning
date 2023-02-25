import React,{Component} from 'react';

class ClassClick extends Component{

    classClickHandler(){
        console.log("button Clicked")
    }

    render(){
        return(
            <>
                <button onClick={this.classClickHandler}>Class Click</button>
            </>
        )
    }
}

export default ClassClick;