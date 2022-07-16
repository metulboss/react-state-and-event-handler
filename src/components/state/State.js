import React, { Component } from 'react';

class state extends Component {


constructor(props){
    super(props)

    this.state={
              count:0
    }
}
HandelIncrement=() =>{
    this.setState({
        count:this.state.count+1
    })
}

HandelDecrement=() =>{
    this.setState({
        count:this.state.count-1
    })
}

    render() {

        const {count} = this.state;
        return (
            <div>
                <h1>This Is State</h1>
                <h1>Count :{count}</h1>
                <button onClick={this.HandelIncrement}>Increment</button>
                <button onClick={this.HandelDecrement} disabled={count === 0 ? true : false}>Decrement</button>
            </div>
        );
    }
}

export default state;