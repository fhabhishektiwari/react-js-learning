import React,{Component} from "react";

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello',
        }
        {/* 3rd approach*/ }
        // this.changeHandler=this.changeHandler.bind(this);
    }

    // changeHandler(){
    //     this.setState({
    //         message:'Good Bye!',
    //     })
    //     console.log(this)
    // }

    // 4th approach arrow methods
    changeHandler=()=>{
        this.setState({
            message:'Good Byeee!',
        })
    }

    render(){
        return(
            <>
                <div>{this.state.message}</div>
                {/* this is first approach bind methods*/}
                {/*<button onClick={this.changeHandler.bind(this)}>Click</button>*/}

                {/* 2nd approach arrow methods*/}
                {/*<button onClick={()=>this.changeHandler()}>Click</button>*/}
                {/* 3rd approach*/}
                {<button onClick={this.changeHandler}>Click</button>}
            </>
        )
    }
}

export default EventBind;