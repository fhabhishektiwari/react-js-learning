import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitors',
        }
    }
    channelSubscribe(){
        this.setState({
            message:'Thanking you for subscribing',
        })
    }
    render(){
        return(
            <>
            {/*<h1>Hello Welcome Visitors</h1>*/}
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.channelSubscribe()}>Subscribe my Channels</button>
            </>
        );
    }
}

export default Message;
