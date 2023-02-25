import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        // you can't update the state directly 
        // this.state.count +=1

        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("Callback", this.state.count)  
        // })

        this.setState((prevState,props)=>({
            count:prevState.count+1
            // count:prevState.count+props
        }))

        console.log("increment",this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <>
            <div>Count: {this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment Count</button>
            </>
        )
    }
}

export default Counter;