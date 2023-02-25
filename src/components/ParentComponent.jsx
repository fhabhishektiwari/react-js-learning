import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(){
        super()
        this.state={
            parentName:'Parent',
        }
        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
